// script.js

function copyAlias(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text)
    .then(() => {
      // Provide feedback to the user
      const button = document.querySelector(`#${id} + button`);
      button.innerText = '✔ Copiado!';
      setTimeout(() => {
        button.innerText = '💳 Copiar alias';
      }, 2000);
    })
    .catch(() => {
      alert('Error al copiar. Intenta de nuevo.');
    });
}
