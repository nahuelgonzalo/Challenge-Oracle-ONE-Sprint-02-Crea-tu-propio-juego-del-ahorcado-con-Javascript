var mensaje_superior = document.querySelector("#msj_sup");
var msj_sup_fin = "¡Fin del juego!";

function errores_dibujar(){
    if (errores === 9) {
        dibujar_base();;
    } else if (errores === 8) {
        dibujar_poste();
    } else if (errores === 7) {
        dibujar_horcaSuperior();
    } else if (errores === 6) {
        dibujar_soga();
    } else if (errores === 5) {
        dibujar_cabeza();
    } else if (errores === 4) {
        dibujar_tronco();
    } else if (errores === 3) {
        dibujar_bbDer();
    } else if (errores === 2) {
        dibujar_bbIzq();
    } else if (errores === 1) {
        dibujar_ppDer();
    } else if (errores === 0) {
        dibujar_ppIzq();
        dibujar_cara();
        mensaje_pierde();
        mensaje_superior.textContent = msj_sup_fin;
    }
};