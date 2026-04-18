import { handleClickCopyTemplate } from "./dialog.js";
import { handleSubmit } from "./form.js";

console.log(import.meta.url);

const form = document.getElementById("form-template");
// dialog copy clipboard
const templateTextarea = document.getElementById("template-button");

form.addEventListener("submit", handleSubmit);
templateTextarea.addEventListener("click", handleClickCopyTemplate);



//theme
const buttonTheme = document.getElementById("toggle-theme");
if (buttonTheme) {
    buttonTheme.addEventListener("click", e => {
        console.log("click button theme ")
        e.preventDefault();
        const savedTheme = localStorage.getItem("theme");
        if (!savedTheme || savedTheme == "light") {
            localStorage.setItem("theme", "dark");
            applyTheme("dark");
            console.log("dark")
            return;

        }
        console.log("light")
        localStorage.setItem("theme", "light");
        applyTheme("light")


    })
}
const applyTheme = (theme) => {
    if (theme) {
        document.documentElement.setAttribute("data-theme", theme);
        return;
    }
    document.documentElement.removeAttribute("data-theme");

}

const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        applyTheme(savedTheme);
        return;
    }
    applyTheme(null);
}
//change in system preference
const media = window.matchMedia("(prefers-color-scheme: dark)");
media.addEventListener("change", e => {
    if (!localStorage.getItem("theme")) { applyTheme(null) }
})
