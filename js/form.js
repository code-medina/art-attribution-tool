import { showModalDialog } from "./dialog.js";
import { generateTemplate } from "./template.js";
import { validationMaxLength, validationMinLength } from "./validation.js";



// work input event

const yearHtml = document.getElementById("year");
const yearLabel = yearHtml.previousElementSibling;
const ubicationHtml = document.getElementById("ubication");
const ubicationLabel = ubicationHtml.previousElementSibling;
const buttonsSubmit = document.querySelectorAll('.buttons [type="submit"]');


const setDisabledSubmits = (button, disabled = true) => {
	if (button) {
		const isDisabled = button.disabled;

		if (disabled === true && !isDisabled) button.setAttribute("disabled", true);

		if (disabled === false && isDisabled) button.removeAttribute("disabled");

	}

}
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

export const handleInputWork = (e) => {

	const value = e.target.value;
	const isYearHidden = yearHtml.hidden;
	const isUbicationHidden = ubicationHtml.hidden;

	if (value.trim() === "") {
		console.log("entro a value nada")
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

const validationLegth = (value) => {
	console.log("validation length");

	if (validationMinLength(value) && validationMaxLength(value)) {
		console.log("es true");
		return true;
	}

	return false;
}
const dataForm = (formTarget) => {
	const formData = new FormData(formTarget);
	console.log("formData", formData);
	if (!formData) return;
	// Display the key/value pairs
	const data = {};
	for (const pair of formData.entries()) {
		data[pair[0]] = pair[1];
		//only if not empty
		if (pair[1] !== "") {
			console.log("validando", pair[0], pair[1])

			console.log(validationLegth([pair[1]]));
			if (!validationLegth(pair[1])) {
				console.log("no valido", pair[1]);
				const spanError = document.getElementById(`error-${pair[0]}`);
				spanError.textContent = "Error maximo 40 characters,minimo 2";

				setTimeout(() => spanError.textContent = "", 3000);
				return null;


			}
		}

	}
	console.log(data);
	return data;
};

export const handleSubmit = (submitEvent) => {
	submitEvent.preventDefault();
	const button = submitEvent.submitter;

	const data = dataForm(submitEvent.target);
	if (!data) return;


	const handler = templateDispatcher[button.dataset.type];
	if (!handler) return;
	const templateData = handler(data);

	showModalDialog(templateData);
};
