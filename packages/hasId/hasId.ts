export function hasId(entry: unknown) {
  return entry && typeof entry === "object" && "id" in entry;
}
