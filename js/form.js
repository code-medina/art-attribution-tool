import { showModalDialog } from "./dialog.js";
import { generateTemplate } from "./template.js";
import { validationMaxLength, validationMinLength } from "./validation.js";



// conditional field
const yearHtml = document.getElementById("year");
const yearLabel = yearHtml.previousElementSibling;
const ubicationHtml = document.getElementById("ubication");
const ubicationLabel = ubicationHtml.previousElementSibling;

//submits button
const buttonsSubmit = document.querySelectorAll('.buttons [type="submit"]');

const setDisabledSubmits = (button, disabled = true) => {
	if (button) {
		const isDisabled = button.disabled;

		if (disabled === true && !isDisabled) button.setAttribute("disabled", true);

		if (disabled === false && isDisabled) button.removeAttribute("disabled");

	}

}
//event input artist allow submit
export const handlerInputArtist = (e) => {
	const value = e.target.value;
	if (value.trim() === "") {

		buttonsSubmit.forEach(b => setDisabledSubmits(b, true));
		return;

	}
	buttonsSubmit.forEach(b => setDisabledSubmits(b, false));

}



const setHiddenInputAndLabel = (input, label, hidden = true) => {

	const isInputHidden = input.hidden;
	const isLabelHidden = label.hidden;

	if (isInputHidden && !hidden) input.removeAttribute("hidden");
	if (isLabelHidden && !hidden) label.removeAttribute("hidden");

	if (!isInputHidden && hidden) input.setAttribute("hidden", true);
	if (!isLabelHidden && hidden) label.setAttribute("hidden", true);

}

// event input work  allow conditional field and your labels
export const handleInputWork = (e) => {

	const value = e.target.value;

	if (value.trim() === "") {
		setHiddenInputAndLabel(yearHtml, yearLabel, true);
		setHiddenInputAndLabel(ubicationHtml, ubicationLabel, true);

		return;
	}

	setHiddenInputAndLabel(yearHtml, yearLabel, false);
	setHiddenInputAndLabel(ubicationHtml, ubicationLabel, false);

}

// submits
const templateDispatcher = {
	inspiration: (input) => generateTemplate("inspiration", input),
	reference: (input) => generateTemplate("reference", input),
	tribute: (input) => generateTemplate("tribute", input),
	reinterpretation: (input) => generateTemplate("reinterpretation", input),
};


const setErrorMessage = (mapErrors) => {
	for (let [clave, valor] of mapErrors) {
		console.log(`${clave} = ${valor}`);
		const spanError = document.getElementById(`error-${clave}`);
		const input = document.getElementById(clave);
		spanError.textContent = valor;
		setTimeout(() => spanError.textContent = "", 3000);

	}
	document.getElementById("artist").focus();
}
const validateDataForm = ({ artist, work, year, ubication }) => {
	const errors = new Map();
	if (artist.trim() !== "" && (!validationMinLength(artist) || !validationMaxLength(artist))) errors.set("artist", "Usá entre 2 y 40 caracteres 😊");
	if (work.trim() !== "" && (!validationMinLength(work) || !validationMaxLength(work))) errors.set("work", "Usá entre 2 y 40 caracteres 😊");
	if (ubication.trim() !== "" && (!validationMinLength(ubication) || !validationMaxLength(ubication))) errors.set("ubication", "Usá entre 2 y 40 caracteres 😊");

	if (year.trim() !== "" && (!validationMinLength(year, 4) || !validationMaxLength(year, 4))) errors.set("year", "Usá año valido 😊");

	console.log("errors", errors);
	return errors;
}

const dataForm = (formTarget) => {
	const formData = new FormData(formTarget);
	console.log("formData", formData);
	if (!formData) return;
	// Display the key/value pairs
	const data = {};
	for (const pair of formData.entries()) {
		data[pair[0]] = pair[1];
	}
	console.log(data);
	return data;
};

export const handleSubmit = (submitEvent) => {
	submitEvent.preventDefault();
	const button = submitEvent.submitter;

	const data = dataForm(submitEvent.target);
	const errors = validateDataForm(data);
	if (errors.size > 0) {

		setErrorMessage(errors);
		return;
	}

	const handler = templateDispatcher[button.dataset.type];
	if (!handler) return;
	const templateData = handler(data);

	showModalDialog(templateData);
};
