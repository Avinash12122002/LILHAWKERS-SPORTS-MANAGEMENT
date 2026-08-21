import { NextResponse } from "next/server";
import {
  saveSubmission,
  getAllSubmissions,
  updateSubmission,
  deleteSubmission,
  DemoSubmission,
} from "@/lib/submissions";
import { verifyAdminAuth } from "@/lib/auth";

export type { DemoSubmission };

// POST: Process and save demo booking request (Public endpoint)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      organisationName,
      organisationType,
      contactName,
      phone,
      email,
      ageGroups,
      location,
      message,
    } = body;

    // Server-side validation
    if (!organisationName || typeof organisationName !== "string" || !organisationName.trim()) {
      return NextResponse.json(
        { success: false, error: "Organisation name is required" },
        { status: 400 }
      );
    }

    if (!organisationType || typeof organisationType !== "string" || !organisationType.trim()) {
      return NextResponse.json(
        { success: false, error: "Organisation type is required" },
        { status: 400 }
      );
    }

    if (!contactName || typeof contactName !== "string" || !contactName.trim()) {
      return NextResponse.json(
        { success: false, error: "Contact person name is required" },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "A valid phone number (at least 10 digits) is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required" },
        { status: 400 }
      );
    }

    if (!Array.isArray(ageGroups) || ageGroups.length === 0) {
      return NextResponse.json(
        { success: false, error: "Please select at least one age group" },
        { status: 400 }
      );
    }

    if (!location || typeof location !== "string" || !location.trim()) {
      return NextResponse.json(
        { success: false, error: "Location / city is required" },
        { status: 400 }
      );
    }

    // Build record (Pure Reference ID without any prefix)
    const newSubmission: DemoSubmission = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      organisationName: organisationName.trim(),
      organisationType: organisationType.trim(),
      contactName: contactName.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      ageGroups,
      location: location.trim(),
      message: message ? String(message).trim() : "",
      status: "pending",
    };

    // Save to Database (MongoDB or local storage)
    const { source } = await saveSubmission(newSubmission);

    console.log(`[Demo Submission Saved (${source})] ID: ${newSubmission.id} for ${newSubmission.organisationName}`);

    return NextResponse.json(
      {
        success: true,
        message: "Demo request booked successfully! Our team will contact you within 24 hours.",
        submissionId: newSubmission.id,
        storage: source,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing demo submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// GET: Retrieve all submitted demo requests (PROTECTED: Admin Only)
export async function GET(request: Request) {
  try {
    const isAuthorized = await verifyAdminAuth(request);

    if (!isAuthorized) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized: Admin authentication required to view submissions.",
        },
        { status: 401 }
      );
    }

    const { submissions, source } = await getAllSubmissions();

    return NextResponse.json({
      success: true,
      count: submissions.length,
      storage: source,
      submissions,
    });
  } catch (error) {
    console.error("Error reading submissions:", error);
    return NextResponse.json(
      { success: false, error: "Could not retrieve submissions" },
      { status: 500 }
    );
  }
}

// PUT: Update an existing demo submission (PROTECTED: Admin Only)
export async function PUT(request: Request) {
  try {
    const isAuthorized = await verifyAdminAuth(request);

    if (!isAuthorized) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, ...updates } = body;

    if (!id || typeof id !== "string") {
      return NextResponse.json(
        { success: false, error: "Submission ID is required for update" },
        { status: 400 }
      );
    }

    const result = await updateSubmission(id, updates);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Submission not found or update failed" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Submission updated successfully",
      updated: result.updated,
    });
  } catch (error) {
    console.error("Error updating submission:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update submission" },
      { status: 500 }
    );
  }
}

// DELETE: Remove an existing demo submission (PROTECTED: Admin Only)
export async function DELETE(request: Request) {
  try {
    const isAuthorized = await verifyAdminAuth(request);

    if (!isAuthorized) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id } = body;

    if (!id || typeof id !== "string") {
      return NextResponse.json(
        { success: false, error: "Submission ID is required for deletion" },
        { status: 400 }
      );
    }

    const result = await deleteSubmission(id);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Submission not found or delete failed" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Submission deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting submission:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete submission" },
      { status: 500 }
    );
  }
}
