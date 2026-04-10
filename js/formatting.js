export const formatArtist = (artist) => {
    if (!artist) return "";
    return artist
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase());
}
