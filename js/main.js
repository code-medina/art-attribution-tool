import { handleClickCopyTemplate } from "./dialog.js";
import { handleInput, handleSubmit } from "./form.js";
import { handlerToggleTheme, initTheme } from "./theme.js";

console.log(import.meta.url);
//form
const form = document.getElementById("form-template");
form.addEventListener("submit", handleSubmit);
form.querySelector("#work")?.addEventListener("input",handleInput);
// dialog copy clipboard
const templateTextarea = document.getElementById("template-button");
templateTextarea.addEventListener("click", handleClickCopyTemplate);


//theme
const buttonTheme = document.getElementById("toggle-theme");
buttonTheme?.addEventListener("click", handlerToggleTheme)
initTheme();


