document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-suscripcion');
  const emailInput = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');

  if (!form || !emailInput || !mensaje) {
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) {
      mensaje.textContent = 'Escribe tu correo para suscribirte.';
      return;
    }

    mensaje.textContent = 'Enviando tu correo con mucho amor...';

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzV7KdeNCGtBQqD_z9nLwLDTAvZhI3hcqChPlJNlOaq2z78QT5kGP5kqSnsTxjL3z9l/exec';
    const body = new URLSearchParams({ email });

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body
      });

      const raw = await response.text();
      let data = null;

      try {
        data = JSON.parse(raw);
      } catch {
        data = { status: response.ok ? 'success' : 'error', raw };
      }

      if (response.ok && data.status === 'success') {
        mensaje.textContent = 'Gracias por suscribirte. Tu correo fue guardado correctamente.';
        form.reset();
      } else {
        mensaje.textContent = 'No pude guardar tu correo. Revisa la publicación del Apps Script.';
      }
    } catch (error) {
      mensaje.textContent = 'No pude conectar el formulario. Revisa que tu Apps Script esté publicado para cualquier persona.';
    }
  });
});
