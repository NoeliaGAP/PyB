const yearSelector = document.getElementById("current-year");

const getcurrentYear = () => {
    const fechaActual = new Date();
    return fechaActual.getFullYear();
}

yearSelector.innerText = getcurrentYear();