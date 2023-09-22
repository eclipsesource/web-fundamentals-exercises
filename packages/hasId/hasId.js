function hasId(entry) {
  return entry && typeof entry === "object" && "id" in entry;
}
module.exports = {
  hasId,
};
