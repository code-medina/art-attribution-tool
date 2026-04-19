const SUN = "☀️​";
const MOON = "🌙​";


const buttonThemeSetEmoji = (theme) => {
    if (theme === "dark") {
        buttonTheme.innerHTML = SUN;
        return;
    }
    buttonTheme.innerHTML = MOON;

}
//data-theme en html
const applyTheme = (theme) => {
    if (theme) {
        document.documentElement.setAttribute("data-theme", theme);
        return;
    }
    document.documentElement.removeAttribute("data-theme");
}

export const handlerToggleTheme = (e) => {
    console.log("click button theme ")
    e.preventDefault();
    const savedTheme = localStorage.getItem("theme");
    const changedTheme = !savedTheme || savedTheme === "light" ? 'dark' : 'light';
    localStorage.setItem("theme", changedTheme);
    applyTheme(changedTheme);
    buttonThemeSetEmoji(changedTheme);
}


const buttonTheme = document.getElementById("toggle-theme");
export const initTheme = () => {

    console.log("init theme")
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        buttonThemeSetEmoji(savedTheme)
        applyTheme(savedTheme);
        return;

    }
    // Verificar si el sistema prefiere el modo oscuro
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log("El sistema está en modo oscuro");
        buttonThemeSetEmoji("dark")

    } else {
        console.log("El sistema está en modo claro");
        buttonThemeSetEmoji("light");

    }
    //para que aplique la preferencia del sistema y quite atributo data-theme
    applyTheme(null);
}

//change in system preference
const media = window.matchMedia("(prefers-color-scheme: dark)");
media.addEventListener("change", e => {
    if (!localStorage.getItem("theme")) {
        //no es dark preference
        if (media.matches === false) {
            buttonThemeSetEmoji("light");
        } else {
            buttonThemeSetEmoji("dark");

        }
        applyTheme(null);
    }
})