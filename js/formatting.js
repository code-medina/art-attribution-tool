export const formatArtist = (artist) => {
	if (!artist) return "";
	if (typeof artist !== "string") return "";
	return artist
		.trim()
		.replace(/\s+/g, " ")
		.toLowerCase()
		.replace(/\b\w/g, (c) => c.toUpperCase());
};
export const formatSpacing = (words) => {

	if (!words) return "";
	if (typeof words !== "string") return "";
	return words
		.trim()
		.replace(/\s+/g, " ");
}