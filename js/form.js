import { showModalDialog } from "./dialog.js";
import { generateTemplate } from "./template.js";



// work input event

const yearHtml = document.getElementById("year");
const yearLabel = yearHtml.previousElementSibling;
const ubicationHtml = document.getElementById("ubication");
const ubicationLabel = ubicationHtml.previousElementSibling;

const setHiddenInputAndLabel = (input, label, hidden = true) => {

	const isInputHidden = input.hidden;
	const isLabelHidden = label.hidden;

	if (isInputHidden && !hidden) input.removeAttribute("hidden");
	if (isLabelHidden && !hidden) label.removeAttribute("hidden");

	if (!isInputHidden && hidden) input.setAttribute("hidden", true);
	if (!isLabelHidden && hidden) label.setAttribute("hidden", true);

}

export const handleInput = (e) => {
	console.log(e.target.value);
	const value = e.target.value;
	const isYearHidden = yearHtml.hidden;
	const isUbicationHidden = ubicationHtml.hidden;

	if (value === "") {

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

	const handler = templateDispatcher[button.dataset.type];
	if (!handler) return;
	const templateData = handler(data);

	showModalDialog(templateData);
};
