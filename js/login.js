const botonVerContrasenia = document.getElementById("verContrasenia");

const inputContrasenia = document.getElementById("contrasenia");

function revelarContrasenia(){
    if (inputContrasenia.type === "password"){
        inputContrasenia.type = "text";
        botonVerContrasenia.style.backgroundImage = "url('/img/ocultarContrasena.png')";
    } else {
        inputContrasenia.type = "password";
        botonVerContrasenia.style.backgroundImage = "url('/img/verContrasena.png')";
    }
}

botonVerContrasenia.addEventListener("click", function(){
    revelarContrasenia();
})