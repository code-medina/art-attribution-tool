import { handleClickCopyTemplate } from "./dialog.js";
import { handleSubmit } from "./form.js";

console.log(import.meta.url);

const form = document.getElementById("form-template");
// dialog copy clipboard
const templateTextarea = document.getElementById("template-button");

form.addEventListener("submit", handleSubmit);
templateTextarea.addEventListener("click", handleClickCopyTemplate);
