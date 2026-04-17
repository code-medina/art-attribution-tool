import { showModalDialog } from "./dialog.js";
import { generateTemplate } from "./template.js";

const templateDispatcher = {
	inspiration: (input) => generateTemplate("inspiration", input),
	reference: (input) => generateTemplate("reference", input),
	tribute: (input) => generateTemplate("tribute", input),
	reinterpretation: (input) => generateTemplate("reinterpretation", input),
};
const dataForm = (formTarget) => {
	const formData = new FormData(formTarget);
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
