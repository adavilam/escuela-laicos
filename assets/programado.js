// Muestra un enlace solo a partir de una fecha/hora dada.
// Se evalúa con el reloj del navegador de quien visita la página
// (no hay servidor detrás): no es un bloqueo infalible, solo evita
// que el enlace aparezca activo antes de tiempo.

function activarProgramados() {
  document.querySelectorAll("[data-programado]").forEach((el) => {
    const cuando = new Date(el.dataset.hora).getTime();
    const href = el.dataset.href;
    const texto = el.dataset.texto;

    let timer;

    function render() {
      if (Date.now() >= cuando) {
        el.innerHTML = `<a href="${href}" target="_blank" rel="noopener">${texto}</a>`;
        if (timer) clearInterval(timer);
      } else {
        const fecha = new Date(cuando).toLocaleString("es-NI", {
          dateStyle: "long",
          timeStyle: "short",
        });
        el.innerHTML = `${texto} <span class="nota">(se habilita el ${fecha})</span>`;
      }
    }

    render();
    timer = setInterval(render, 30000);
  });
}

document.addEventListener("DOMContentLoaded", activarProgramados);
