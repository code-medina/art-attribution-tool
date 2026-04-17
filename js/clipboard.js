export const clipboard = async (idElement) => {
	const htmlElement = document.getElementById(idElement);
	if (!htmlElement) return;

	const value = htmlElement.value;
	if (value === "") return;
	await navigator.clipboard.writeText(value);
};
