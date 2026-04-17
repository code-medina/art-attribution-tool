import { clipboard } from "./clipboard.js";

const textarea = document.querySelector("#myModal #template");
const dialog = document.getElementById("myModal");

export const showModalDialog = (text) => {
	if (!textarea || !dialog) return;

	textarea.value = text;
	dialog.showModal();
};

export const handleClickCopyTemplate = (event) => {
	event.preventDefault();

	const button = document.getElementById("template-button");
	clipboard()
		.then(() => {
			button.textContent = "copied";
			setTimeout(() => (button.textContent = "copy"), 2000);
		})
		.catch(console.error);
};
