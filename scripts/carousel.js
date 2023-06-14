var contador = 0;
var inc = 0;
var margen = 0;
var slider = document.getElementsByClassName('slider-width')[0];
var itemDisplay = 0;
if (screen.width > 900) {
    itemDisplay = document.getElementsByClassName("slider-contenedor")[0].getAttribute("item-display-d");
    margen = itemDisplay * 4;
} else if (screen.width > 700 && screen.width < 900) {
    itemDisplay = document.getElementsByClassName("slider-contenedor")[0].getAttribute("item-display-t");
    margen = itemDisplay * 6.8;
} else if (screen.width > 300 && screen.width < 700) { // Ajuste para vista móvil
    itemDisplay = document.getElementsByClassName("slider-contenedor")[0].getAttribute("item-display-m");
    margen = itemDisplay * 10; // Ajuste para vista móvil
}

var item = document.getElementsByClassName("item");
var itemleft = item.length % itemDisplay;
var itemSlide = Math.floor(item.length / itemDisplay) - 1;
for(let i=0; i<item.length; i++){
    item[i].style.width = (screen.width /itemDisplay) - margen + "px";
}


function next(){
    if(inc !== itemSlide + itemleft){
        if(inc === itemSlide){
            inc = inc + itemleft;
            contador = contador - (screen.width/itemDisplay)*itemleft;
        } else{
            inc ++;
            contador = contador - screen.width;
        }

    }
    slider.style.left = contador + "px";
}

function prev(){
    if(inc !== 0){
        if(inc === itemleft){
            inc = inc - itemleft;
            contador = contador + (screen.width/itemDisplay)*itemleft;
        } else{
            inc --;
            contador = contador + screen.width;
        }

    }
    slider.style.left = contador + "px";
}


$(document).ready(function() {
    // Obtener el elemento del slider
    var slider = $('.slider-width');

    // Inicializar el deslizamiento táctil
    slider.swipe({
        swipe: function(event, direction) {
            if (direction === 'left') {
                next();
            } else if (direction === 'right') {
                prev();
            }
        },
        threshold: 50 // Umbral de desplazamiento para reconocer el gesto táctil
    });
});

