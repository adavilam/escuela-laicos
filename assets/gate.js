// Candado de acceso simple para páginas de materia.
// No es seguridad real: solo evita que el contenido se vea a simple vista.
// El HTML sigue siendo descargable por cualquiera con conocimientos técnicos.

async function sha256Hex(texto) {
  const datos = new TextEncoder().encode(texto);
  const hash = await crypto.subtle.digest("SHA-256", datos);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function iniciarCandado() {
  const gate = document.getElementById("gate");
  const contenido = document.getElementById("contenido");
  const form = document.getElementById("gate-form");
  const input = document.getElementById("gate-password");
  const error = document.getElementById("gate-error");
  const hashEsperado = gate.dataset.hash;
  const claveSesion = "acceso_" + gate.dataset.materia;

  function mostrarContenido() {
    gate.style.display = "none";
    contenido.classList.remove("oculto");
  }

  if (sessionStorage.getItem(claveSesion) === "ok") {
    mostrarContenido();
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const intento = await sha256Hex(input.value.trim());
    if (intento === hashEsperado) {
      sessionStorage.setItem(claveSesion, "ok");
      mostrarContenido();
    } else {
      error.textContent = "Código incorrecto. Intenta de nuevo.";
      input.value = "";
      input.focus();
    }
  });
}

document.addEventListener("DOMContentLoaded", iniciarCandado);
