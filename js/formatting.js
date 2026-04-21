export const formatArtist = (artist) => {
	if (!artist) return "";
	if (typeof artist !== "string") return "";
	return artist
		.trim()
		.replace(/\s+/g, " ")
		.toLowerCase()
		.replace(/\b\w/g, (c) => c.toUpperCase());
};
export const formatWork = (work) => {

	if (!work) return "";
	if (typeof work !== "string") return "";
	return work
		.trim()
		.replace(/\s+/g, " ");
}