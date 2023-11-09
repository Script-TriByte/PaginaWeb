<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

error_log("Inicio del script", 0);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "belenrosas97@gmail.com";
    $asunto = "Nuevo mensaje de formulario de contacto";

    $contenido = "Nombre: $nombre\n"
    .  "Teléfono: $telefono\n"
    . "Correo electrónico: $email\n"
    . "Mensaje:\n$mensaje\n";

    if (mail($destinatario, $asunto, $contenido)) {
        $response = array("success" => true);
    } else {
        $response = array("success" => false);
    }

    header("Content-Type: application/json");
    echo json_encode($response);
}

error_log("Fin del script", 0);
?>

