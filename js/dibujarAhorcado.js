function dibujar_base() {
    var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
    pincel.imageSmoothingQuality = "high";
    pincel.fillStyle = "#154360";
    pincel.strokeStyle = "#154360";
    pincel.lineWidth = 2;
    pincel.beginPath();
    //base
	pincel.fillRect(400,300,400,5);
}
function dibujar_poste() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
    pincel.imageSmoothingQuality = "high";
    pincel.fillStyle = "#154360"; 
    pincel.lineWidth = 2;
   //poste
	pincel.fillRect(400,0,5,300);
}
function dibujar_horcaSuperior() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
    pincel.imageSmoothingQuality = "high";
    pincel.fillStyle = "#154360";
    pincel.lineWidth = 2;
    //horca superior
	pincel.fillRect(400,0,200,5);
}
function dibujar_soga() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
    pincel.imageSmoothingQuality = "high";
    pincel.fillStyle = "#154360"; 
    pincel.lineWidth = 2;
    //soga
	pincel.fillRect(600,0,5,25);
}
function dibujar_cabeza() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
    pincel.imageSmoothingQuality = "high";
    pincel.strokeStyle = "#154360";
    pincel.lineWidth = 3;
	//cabeza
	pincel.beginPath();
	pincel.arc(602.25,50,25,0,2*Math.PI);
    pincel.stroke();
}
function dibujar_tronco() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
    pincel.imageSmoothingQuality = "high";
    pincel.strokeStyle = "#154360";
    pincel.lineWidth = 3;
    //tronco
    pincel.moveTo(602.25,75);
    pincel.lineTo(602.25,170);
    pincel.stroke();
    pincel.closePath();
}
function dibujar_bbIzq() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
    pincel.imageSmoothingQuality = "high";
    pincel.fillStyle = "#154360"; 
    pincel.strokeStyle = "#154360";
    pincel.lineWidth = 3;
    //bb izq
    pincel.moveTo(602.25,75);
    pincel.lineTo(570,135);
    pincel.stroke();
    pincel.closePath();
}
function dibujar_bbDer() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
    pincel.imageSmoothingQuality = "high";
    pincel.fillStyle = "#154360"; 
    pincel.strokeStyle = "#154360";
    pincel.lineWidth = 3;
    //bb der
    pincel.moveTo(602.25,75);
    pincel.lineTo(634.5,135);
    pincel.stroke();
    pincel.closePath();
}
function dibujar_ppIzq() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
    pincel.imageSmoothingQuality = "high";
    pincel.fillStyle = "#154360"; 
    pincel.strokeStyle = "#154360";
    pincel.lineWidth = 3;
    //pp izq
    pincel.moveTo(602.25,170);
    pincel.lineTo(572.25,240);
    pincel.stroke();
    pincel.closePath();
}
function dibujar_ppDer() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
    pincel.imageSmoothingQuality = "high";
    pincel.fillStyle = "#154360"; 
    pincel.strokeStyle = "#154360";
    pincel.lineWidth = 3;
    //pp der
    pincel.moveTo(602.25,170);
    pincel.lineTo(632.25,240);
    pincel.stroke();
    pincel.closePath();
}

function dibujar_cara() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
    pincel.imageSmoothingQuality = "high";
    pincel.fillStyle = "#154360"; 
    pincel.lineWidth = 2;
    //ojo izquierdo
    pincel.moveTo(596,45);
    pincel.lineTo(591,52);
    pincel.stroke();
    pincel.closePath();

    pincel.moveTo(596,52);
    pincel.lineTo(591,45);
    pincel.stroke();
    pincel.closePath();

    //ojo derecho
    pincel.moveTo(613,45);
    pincel.lineTo(608,52);
    pincel.stroke();
    pincel.closePath();

    pincel.moveTo(613,52);
    pincel.lineTo(608,45);
    pincel.stroke();
    pincel.closePath();

    //boca
    
    pincel.moveTo(591,60);
    pincel.lineTo(613,60);
    pincel.stroke();
    pincel.closePath();
    
}