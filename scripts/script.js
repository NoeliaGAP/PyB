const yearSelector = document.getElementById("current-year");
const menu = document.getElementById("menu");
const toogleButton = document.getElementById("menu-icon");
const menuOptions = document.querySelectorAll(".menu-option");

const getcurrentYear = () => {
    const fechaActual = new Date();
    return fechaActual.getFullYear();
}

const setMenu = () => {
    let width = window.innerWidth;
    if (width <= 768) {
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
menuOptions.forEach(function (element) {
    element.addEventListener("click", () => {
        setMenu();
    });
});

setMenu();

// Funcionalidad para cambiar imagen al hacer hover en .accion-item
const accionItems = document.querySelectorAll(".accion-item");
const accionImg = document.getElementById("accion-img");

accionItems.forEach(item => {
    const originalSrc = accionImg.src;

    item.addEventListener("mouseover", () => {
        const newImg = item.getAttribute("data-img");
        accionImg.src = newImg;
    });

    // item.addEventListener("mouseout", () => {
    //     accionImg.src = originalSrc;
    // });
});
