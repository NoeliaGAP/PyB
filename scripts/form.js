const form = document.getElementById("contact-form");

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
      // console.log("Success:", result);
      form.reset();
    })
    .catch((error) => {
      // console.log("Error: ", error);
      alert("Hubo un problema al enviar el formulario.");
    });
});
