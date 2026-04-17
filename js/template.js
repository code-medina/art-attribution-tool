import { formatArtist } from "./formatting.js";

/**
 * Construye el texto base de la obra
 */
const buildWorkText = ({ artist, work, year } = {}) => {
	return work ? `la obra "${work}"${year}, de ${artist}` : `obra de ${artist}`;
};

/**
 * Construye el mensaje final con prefijo + ubicación opcional
 */
const buildMessage = (prefix, data) => {
	const base = buildWorkText(data);

	return data.ubication
		? `${prefix} ${base}. ${data.ubication}`
		: `${prefix} ${base}.`;
};

/**
 * Generadores por tipo
 */
const generateReinterpretation = (data) =>
	buildMessage("Reinterpretación de", data);

const generateTribute = (data) =>
	data.work
		? buildMessage("Homenaje a", data)
		: data.ubication
			? `Homenaje a ${data.artist}. ${data.ubication}`
			: `Homenaje a ${data.artist}.`;

const generateReference = (data) =>
	data.work
		? buildMessage("Referencia a", data)
		: buildMessage("Referencia a la", data);

const generateInspiration = (data) =>
	data.work
		? buildMessage("Inspirado en", data)
		: data.ubication
			? `Inspirado en ${data.artist}. ${data.ubication}`
			: `Inspirado en ${data.artist}.`;

/**
 * Dispatcher de tipos
 */
const typeDispatcher = {
	inspiration: generateInspiration,
	reference: generateReference,
	tribute: generateTribute,
	reinterpretation: generateReinterpretation,
};

/**
 * Normaliza los datos de entrada
 */
const dataParser = ({ artist, work, year, ubication } = {}) => {
	const formatAuthor = formatArtist(artist);

	const normalizedWork =
		typeof work === "string" && work.trim().length > 0 ? work.trim() : "";

	const normalizedUbication =
		typeof ubication === "string" && ubication.trim().length > 0
			? ubication.trim()
			: "";

	const parsedYear = Number(year);
	const normalizedYear =
		!Number.isNaN(parsedYear) && parsedYear > 0 ? ` (${parsedYear})` : "";

	return {
		artist: formatAuthor,
		work: normalizedWork,
		year: normalizedYear,
		ubication: normalizedUbication,
	};
};

/**
 * API principal
 */
export const generateTemplate = (type, input) => {
	if (
		!type ||
		typeof input !== "object" ||
		input === null ||
		Array.isArray(input)
	) {
		return "";
	}

	const { artist, work, year, ubication } = input;

	if (typeof artist !== "string" || artist.trim().length === 0) {
		return "";
	}

	const data = dataParser({ artist, work, year, ubication });

	if (!data.artist) return "";

	const normalizedType = type.toLowerCase();
	const handler = typeDispatcher[normalizedType];

	if (!handler) return "";

	return handler(data);
};
