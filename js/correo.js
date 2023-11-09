import { ruta } from "./variables.js";

/*document.getElementById('formularioContacto').addEventListener('submit', function (e) {
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
});*/


function aplicarIngles() {
    document.cookie = "lang=en;path=/"
    location.reload()
}

function aplicarEspanol(){
    document.cookie = "lang=es;path=/"
    location.reload()
}

$('#idiomaDelSistema').click(function(){
    if(document.cookie.indexOf("lang=en") !== -1){
        aplicarEspanol()
    } else {
        aplicarIngles()
    }
});

$(document).ready(function () {
    if(document.cookie.indexOf("lang=en") !== -1){
        $('#idiomaDelSistema').css('background-image', 'url(/img/banderaUK.png)')
    } else {
        $('#idiomaDelSistema').css('background-image', 'url(/img/banderaUruguay.png)')
    }
    Promise.all([fetch('/' + ruta), fetch('/json/elementos.json')])
    .then((responses) => Promise.all(responses.map((response) => response.json())))
    .then((data) => {
        const idioma = data[0];
        const arrayDeIdioma = idioma[6]
        const arrayDeTextos = data[1];
        const arrayDeTextos2 = arrayDeTextos[6]

        for (let posicion = 0; posicion < Object.keys(arrayDeTextos2).length; posicion++){
            let texto = document.getElementById(arrayDeTextos2[posicion])
            if (texto.nodeName == "INPUT"){
                texto.placeholder = arrayDeIdioma[posicion]
            } else {
                texto.textContent = arrayDeIdioma[posicion]
            }
        }
    })

});




