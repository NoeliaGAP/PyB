const form = document.getElementById("contact-form");
const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const url =
    "https://script.google.com/macros/s/AKfycbzr5cmjwmfC36LxKpkLMFmb2Mzx823y4a2QUCAQ1-ghHokxqfLpuoZBW9cOidCxBgK9ew/exec";

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((result) => {
      showToast();
      form.reset();
    })
    .catch((error) => {
      alert(`Error al enviar el formulario: ${error}`);
    });
});

const showToast = () => {
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.add("hide");

    // Limpiar después de la animación
    setTimeout(() => {
      toast.classList.remove("show", "hide");
    }, 500);
  }, 1500);
};
