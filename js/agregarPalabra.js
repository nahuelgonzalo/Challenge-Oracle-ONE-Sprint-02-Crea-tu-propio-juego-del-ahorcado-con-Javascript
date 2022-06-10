var btnAgregar = document.querySelector("#agregarPalabra");

btnAgregar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-palabra");
    var palabra = form.word.value;

    if( palabra != ""){
        palabras.push(palabra);
        console.log("Usted hizo click en el boton Guardar Palabra",palabra);
        window.alert("Se guardo con exito la palabra");
        document.getElementById('form-palabra').reset();
    }
    else
        window.alert("No agrego ninguna palabra");
    
});