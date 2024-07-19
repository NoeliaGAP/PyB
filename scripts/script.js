const yearSelector = document.getElementById("current-year");
const menu = document.getElementById("menu");
const toogleButton = document.getElementById("menu-icon");

const getcurrentYear = () => {
    const fechaActual = new Date();
    return fechaActual.getFullYear();
}

const setMenu = () => {
    let width = window.innerWidth;
    if (width < 780) {
        menu.classList.add('closed');
    } else {
        menu.classList.remove('closed');
    }
}

const toogleMenuButton = () => {
    menu.classList.toggle('closed');
}

yearSelector.innerText = getcurrentYear();

toogleButton.addEventListener('click', toogleMenuButton)
window.addEventListener('resize', setMenu);

setMenu()