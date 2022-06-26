
function mensaje_pierde () {
    var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");

    pincel.fillStyle = "#EF1A53";
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.font = "bold 35px Arial";
    pincel.lineWidth = 0;

    pincel.fillText("FIN DEL JUEGO",470,295);
}

function mensaje_gana() {
    var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");

    pincel.fillStyle = "#05DA5F";
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.font = "bold 35px Arial";
    pincel.lineWidth = 0;

    pincel.fillText("¡FELICITACIONES!",450,292);
}