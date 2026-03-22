/* ============================================
 manejo del formulario de contacto
   ============================================ */

const form = document.querySelector('.form-contacto');

if (form) {
    form.addEventListener('submit', function (e) {

        /* Obtiene el botón de envío */
        const btn = form.querySelector('button[type="submit"]');

        /* Cambia el texto y deshabilita el botón
           para evitar envíos duplicados */
        btn.textContent = 'Enviando...';
        btn.disabled = true;
    });
}