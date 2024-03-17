var azul = document.getElementById("azul");
var rojo = document.getElementById("rojo");
var amarillo = document.getElementById("amarillo");
var verde = document.getElementById("verde");

azul.addEventListener("click", function() {
    cambiarColor(azul);
});

rojo.addEventListener("click", function() {
    cambiarColor(rojo);
});

amarillo.addEventListener("click", function() {
    cambiarColor(amarillo);
});

verde.addEventListener("click", function() {
    cambiarColor(verde);
});

function cambiarColor(elemento) {
    elemento.style.backgroundColor = "black";
}


function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
});



