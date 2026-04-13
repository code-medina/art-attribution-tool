import { formatArtist } from "./formatting";

const generateReinterpretation = ({ artist, work } = {}) => {
	console.log("entro1", typeof artist);

	if (typeof artist !== "string" || artist.trim().length === 0) return "";

	console.log("entro2");
	let message = `Reinterpretacion de `;
	message +=
		typeof work === "string" && work.trim().length > 0
			? `obra "${work}" de ${artist}`
			: `obra de ${artist}`;

	console.log("message", message);
	return message;
};



const generateTribute = ({ artist, work } = {}) => {
	console.log("entro1", typeof artist);

	if (typeof artist !== "string" || artist.trim().length === 0) return "";

	console.log("entro2");
	let message = `Homenaje a `;
	message +=
		typeof work === "string" && work.trim().length > 0
			? `obra "${work}" de ${artist}`
			: `${artist}`;

	console.log("message", message);
	return message;
};

const generateReference = ({ artist, work } = {}) => {
	console.log("entro1", typeof artist);

	if (typeof artist !== "string" || artist.trim().length === 0) return "";

	console.log("entro2");
	let message = `Referencia en `;
	message +=
		typeof work === "string" && work.trim().length > 0
			? `obra "${work}" de ${artist}`
			: `obra de ${artist}`;

	console.log("message", message);
	return message;
};

const generateInspiration = ({ artist, work } = {}) => {
	console.log("entro1", typeof artist);

	if (typeof artist !== "string" || artist.trim().length === 0) return "";

	console.log("entro2");
	let message = `Inspirado en `;
	message +=
		typeof work === "string" && work.trim().length > 0
			? `obra "${work}" de ${artist}`
			: `${artist}`;

	console.log("message", message);
	return message;
};
const typeDispatcher = {
	inspiration: generateInspiration,
	reference: generateReference,
	tribute: generateTribute,
	reinterpretation: generateReinterpretation,
};
export const generateTemplate = (type, { artist, work } = {}) => {
	if (!type || typeof artist !== "string" || artist.trim().length === 0)
		return "";
	const formatAuthor = formatArtist(artist);
	const normalizedType = type.toLowerCase();
	const handler = typeDispatcher[normalizedType];
	console.log("handler:::::", handler);
	if (!handler) return "";
	return handler({ artist: formatAuthor ,work});
};
