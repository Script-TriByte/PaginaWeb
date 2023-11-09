document.getElementById('formularioContacto').addEventListener('submit', function (e) {
    e.preventDefault();

    fetch('../../php/correo.php', {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Si");
        } else {
            alert("Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.");
        }
    })
    .catch(error => {
        alert(error);
    });
});


