//måste vara först definerad

const WIDTH = 500; // bredden på elemten ref till canvas.width
const HEIGHT = 500; // höjden på elemten ref till canvas.height

//

let canvas = document.createElement('canvas'); // skapar elementen canvas i main
let ctx = canvas.getContext('2d'); // specifierar contexturen till 2d
canvas.getAttribute('class', 'border'); // ger class och gräns attribut
canvas.width = WIDTH; // samma elemnt men pekar till const värde
canvas.height = HEIGHT; // samma elent men oekar till const värde

// flygande kvadrat

const Box = function(x,y) { //ger funktion till x och y kordinater
    let box = {}; //skapar ett objekt utan egenskaper
    box.x = x; //positionerar x-led
    box.y = y; //positionerar y-led
    box.speed = 4; // ger rit hastighet 4
    box.width = 10; // storlek på boxen
    box.height = 10; // höjden på boxen
    box.color = getRandomColor();
    box.draw = function() { //öppnar rit funktionen för boxen
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    return box;
}  

let Box = Box(0, 200);


//Månste vara sist
let main = document.getElementsByTagName('main')[0]; // hämtar main taggen
main.appendChild(canvas); // lägger ut canvas i main
// Måste vara sist

function getRandomColor(alpha) {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + "," +  (alpha ? alpha : 1) + ")";
}