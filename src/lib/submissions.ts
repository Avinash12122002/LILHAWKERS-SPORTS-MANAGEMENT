import { promises as fs } from "fs";
import path from "path";
import { getMongoClientPromise } from "./mongodb";
import { formatRefId } from "./format";

export type SubmissionStatus = "pending" | "contacted" | "scheduled" | "completed";

export interface DemoSubmission {
  id: string;
  createdAt: string;
  organisationName: string;
  organisationType: string;
  contactName: string;
  phone: string;
  email: string;
  ageGroups: string[];
  location: string;
  message?: string;
  status?: SubmissionStatus;
  source?: "mongodb" | "file";
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "submissions.json");
const DB_NAME = process.env.MONGODB_DB_NAME || "lilhawkers";
const COLLECTION_NAME = "demo_submissions";

// File-based helper
async function ensureFileStore(): Promise<DemoSubmission[]> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const fileData = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(fileData);
  } catch {
    const initial: DemoSubmission[] = [];
    await fs.writeFile(DATA_FILE, JSON.stringify(initial, null, 2), "utf-8");
    return initial;
  }
}

// Save a demo submission (saves to MongoDB if available, otherwise file)
export async function saveSubmission(submission: DemoSubmission): Promise<{ source: "mongodb" | "file" }> {
  const itemWithDefaults: DemoSubmission = {
    ...submission,
    status: submission.status || "pending",
  };

  const mongoPromise = getMongoClientPromise();

  if (mongoPromise) {
    try {
      const client = await mongoPromise;
      const db = client.db(DB_NAME);
      const collection = db.collection<DemoSubmission>(COLLECTION_NAME);
      await collection.insertOne({ ...itemWithDefaults, source: "mongodb" });
      console.log(`[MongoDB] Successfully saved demo submission ${submission.id}`);
      return { source: "mongodb" };
    } catch (mongoError) {
      console.error("[MongoDB Error] Falling back to file store:", mongoError);
    }
  }

  // File fallback
  const list = await ensureFileStore();
  list.unshift({ ...itemWithDefaults, source: "file" });
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf-8");
  console.log(`[File Store] Successfully saved demo submission ${submission.id}`);
  return { source: "file" };
}

// Get all demo submissions (from MongoDB if available, otherwise file)
export async function getAllSubmissions(): Promise<{ submissions: DemoSubmission[]; source: "mongodb" | "file" }> {
  const mongoPromise = getMongoClientPromise();

  if (mongoPromise) {
    try {
      const client = await mongoPromise;
      const db = client.db(DB_NAME);
      const collection = db.collection<DemoSubmission>(COLLECTION_NAME);
      const items = await collection
        .find({})
        .sort({ createdAt: -1 })
        .toArray();

      const formatted: DemoSubmission[] = items.map((doc) => ({
        id: doc.id,
        createdAt: doc.createdAt,
        organisationName: doc.organisationName,
        organisationType: doc.organisationType,
        contactName: doc.contactName,
        phone: doc.phone,
        email: doc.email,
        ageGroups: doc.ageGroups,
        location: doc.location,
        message: doc.message,
        status: doc.status || "pending",
        source: "mongodb",
      }));

      return { submissions: formatted, source: "mongodb" };
    } catch (mongoError) {
      console.error("[MongoDB Error] Falling back to file store for retrieval:", mongoError);
    }
  }

  const fileItems = await ensureFileStore();
  const normalized = fileItems.map((item) => ({
    ...item,
    status: item.status || "pending",
    source: "file" as const,
  }));
  return { submissions: normalized, source: "file" };
}

function getIdCandidates(id: string): string[] {
  const clean = id.trim();
  const stripped = clean.replace(/^(DEMO-|LH-)/, "");
  const formatted = formatRefId(clean);
  return Array.from(new Set([clean, stripped, formatted, `DEMO-${stripped}`, `LH-${stripped}`]));
}

// Update a demo submission
export async function updateSubmission(id: string, updates: Partial<DemoSubmission>): Promise<{ success: boolean; updated?: DemoSubmission }> {
  const candidates = getIdCandidates(id);
  const mongoPromise = getMongoClientPromise();

  if (mongoPromise) {
    try {
      const client = await mongoPromise;
      const db = client.db(DB_NAME);
      const collection = db.collection<DemoSubmission>(COLLECTION_NAME);
      const regexConditions = candidates.map((c) => ({
        id: { $regex: `${c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, $options: "i" },
      }));
      const result = await collection.findOneAndUpdate(
        { $or: [{ id: { $in: candidates } }, ...regexConditions] },
        { $set: updates },
        { returnDocument: "after" }
      );
      if (result) {
        return { success: true, updated: result as DemoSubmission };
      }
    } catch (mongoError) {
      console.error("[MongoDB Update Error]:", mongoError);
    }
  }

  // File fallback update
  const list = await ensureFileStore();
  const index = list.findIndex((item) => {
    const itemId = item.id.toLowerCase();
    return candidates.some(
      (c) =>
        itemId === c.toLowerCase() ||
        itemId.endsWith(c.toLowerCase()) ||
        formatRefId(item.id).toLowerCase() === c.toLowerCase()
    );
  });
  if (index !== -1) {
    list[index] = { ...list[index], ...updates };
    await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf-8");
    return { success: true, updated: list[index] };
  }

  return { success: false };
}

// Delete a demo submission
export async function deleteSubmission(id: string): Promise<{ success: boolean }> {
  const candidates = getIdCandidates(id);
  const mongoPromise = getMongoClientPromise();

  if (mongoPromise) {
    try {
      const client = await mongoPromise;
      const db = client.db(DB_NAME);
      const collection = db.collection<DemoSubmission>(COLLECTION_NAME);
      const regexConditions = candidates.map((c) => ({
        id: { $regex: `${c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, $options: "i" },
      }));
      const result = await collection.deleteOne({
        $or: [{ id: { $in: candidates } }, ...regexConditions],
      });
      if (result.deletedCount > 0) {
        return { success: true };
      }
    } catch (mongoError) {
      console.error("[MongoDB Delete Error]:", mongoError);
    }
  }

  // File fallback delete
  const list = await ensureFileStore();
  const initialLength = list.length;
  const filtered = list.filter((item) => {
    const itemId = item.id.toLowerCase();
    return !candidates.some(
      (c) =>
        itemId === c.toLowerCase() ||
        itemId.endsWith(c.toLowerCase()) ||
        formatRefId(item.id).toLowerCase() === c.toLowerCase()
    );
  });
  if (filtered.length !== initialLength) {
    await fs.writeFile(DATA_FILE, JSON.stringify(filtered, null, 2), "utf-8");
    return { success: true };
  }

  return { success: false };
}
