document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.subscription-form');
    const confirmationMessage = document.querySelector('.confirmation-message');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita el envío automático del formulario
  
      // Oculta el formulario y muestra el mensaje de confirmación
      form.style.display = 'none';
      confirmationMessage.style.display = 'block';
  
      // Envía el formulario usando fetch
      fetch(form.action, {
        method: form.method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(new FormData(form)).toString()
      })
        .then(response => {
          if (response.ok) {
            console.log('Formulario enviado con éxito');
          } else {
            console.error('Hubo un error al enviar el formulario');
            alert('Error al enviar el formulario. Inténtalo de nuevo.');
            form.style.display = 'block'; // Vuelve a mostrar el formulario en caso de error
            confirmationMessage.style.display = 'none';
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Error al enviar el formulario. Inténtalo de nuevo.');
          form.style.display = 'block'; // Vuelve a mostrar el formulario en caso de error
          confirmationMessage.style.display = 'none';
        });
    });
  });
  