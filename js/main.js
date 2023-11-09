import { urlBackoffice } from "../js/configuracion.js";
import { ruta } from "./variables.js";

let aplicacionActual = "Almacen";

const flechaIzquierda = document.getElementById("izquierda");
const flechaDerecha = document.getElementById("derecha");

if (aplicacionActual === "Almacen"){
  revelarAplicacionAlmacen();
}

function revelarAplicacionAlmacen(){
  fetch('/' + ruta)
  .then(response => response.json())
  .then(data => {
    const arrayDeTextos = data[5]
    $("#nombreAplicacion").html(arrayDeTextos[8])
    $("#informacionApp").html(arrayDeTextos[12])
  })
  $("#accesoAplicacion").attr("href", "/html/aplicaciones/appAlmacenes.html");
  $(".contenedorInformacion").css("background-image", "url(/img/BGAlmacen.png)");

  ocultarFlechaIzquierda();
  mostrarFlechaDerecha();
  accesoAplicacionCamiones(flechaDerecha);
}

function revelarAplicacionCamiones(){
  fetch('/' + ruta)
  .then(response => response.json())
  .then(data => {
    const arrayDeTextos = data[5]
    $("#nombreAplicacion").html(arrayDeTextos[9])
    $("#informacionApp").html(arrayDeTextos[13])
  })
  $("#accesoAplicacion").attr("href", "/html/aplicaciones/appCamiones.html");
  $(".contenedorInformacion").css("background-image", "url(/img/BGCamiones.png)");

  mostrarFlechaIzquierda();
  mostrarFlechaDerecha();
  accesoAplicacionAlmacen(flechaIzquierda);
  accesoAplicacionSeguimiento(flechaDerecha);
}

function revelarAplicacionSeguimiento(){
  fetch('/' + ruta)
  .then(response => response.json())
  .then(data => {
    const arrayDeTextos = data[5]
    $("#nombreAplicacion").html(arrayDeTextos[10])
    $("#informacionApp").html(arrayDeTextos[14])
  })
  $("#accesoAplicacion").attr("href", "/html/aplicaciones/appSeguimiento.html");
  $(".contenedorInformacion").css("background-image", "url(/img/BGSeguimiento.png)");

  mostrarFlechaIzquierda();
  mostrarFlechaDerecha();
  accesoAplicacionCamiones(flechaIzquierda);
  accesoBackoffice(flechaDerecha);
}

function revelarBackoffice(){
  fetch('/' + ruta)
  .then(response => response.json())
  .then(data => {
    const arrayDeTextos = data[5]
    $("#nombreAplicacion").html(arrayDeTextos[11])
    $("#informacionApp").html(arrayDeTextos[15])
  })
  $("#accesoAplicacion").attr("href", "/html/aplicaciones/appBackOffice.html");
  $(".contenedorInformacion").css("background-image", "url(/img/BGBackoffice.png)");

  mostrarFlechaIzquierda();
  ocultarFlechaDerecha();
  accesoAplicacionSeguimiento(flechaIzquierda);
}

function ocultarFlechaIzquierda(){
  flechaIzquierda.style.display = "none";
}

function ocultarFlechaDerecha(){
  flechaDerecha.style.display = "none";
}

function mostrarFlechaIzquierda(){
  flechaIzquierda.style.display = "block";
}

function mostrarFlechaDerecha(){
  flechaDerecha.style.display = "block";
}

function accesoAplicacionAlmacen(boton){
  boton.addEventListener('click', function(){
    revelarAplicacionAlmacen();
  })
}

function accesoAplicacionSeguimiento(boton){
  boton.addEventListener('click', function(){
    revelarAplicacionSeguimiento();
  })
}

function accesoAplicacionCamiones(boton){
  boton.addEventListener('click', function(){
    revelarAplicacionCamiones();
  })
}

function accesoBackoffice(boton){
  boton.addEventListener("click", function() {
    revelarBackoffice();
  });
}

$("#appAlmacen").click(function(){
  revelarAplicacionAlmacen();
});

$("#appChoferes").click(function(){
  revelarAplicacionCamiones();
});

$("#appSeguimiento").click(function(){
  revelarAplicacionSeguimiento();
});

$("#appBackoffice").click(function(){
  revelarBackoffice();
});

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
      const arrayDeIdioma = idioma[5]
      const arrayDeTextos = data[1];
      const arrayDeTextos2 = arrayDeTextos[5]

      for (let posicion = 0; posicion < Object.keys(arrayDeTextos2).length; posicion++){
          let texto = document.getElementById(arrayDeTextos2[posicion])
          texto.textContent = arrayDeIdioma[posicion]
      }
  })

});
