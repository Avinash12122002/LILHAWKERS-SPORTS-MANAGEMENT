export function formatRefId(id: string): string {
  if (!id) return "";
  const clean = id.trim().replace(/^(DEMO-|LH-)/, "");
  // If in old 13-digit timestamp format (e.g. 1787305677438-XJVD1), reduce size by half to 7438-XJVD1
  const match = clean.match(/^(\d{7,14})-([A-Za-z0-9]+)$/);
  if (match) {
    return `${match[1].slice(-4)}-${match[2]}`;
  }
  return clean;
}
