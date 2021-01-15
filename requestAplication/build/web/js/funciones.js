
function cargarElemento(url, elemento){
    var request = new XMLHttpRequest();
    request.open("GET",url,false);
    request.send();
    elemento.innerHTML = request.responseText;
}


function cargarFormulario1(){
    cargarElemento("formulario1.html", document.getElementById("contenidoDinamico"));
}


function cargarFormulario2(){
    cargarElemento("formulario2.html", document.getElementById("contenidoDinamico"));
}