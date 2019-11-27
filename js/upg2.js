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

const Box = function(x, y) {
    let box = {};
    box.x = x;
    box.y = y;
    box.speed = 4;
    box.width = 100;
    box.height = 100;
    box.color = getRandomColor();
    box.draw = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    return box; // vi returnerar box objektet
}

let box = Box(0, 200); // skapa en ny Box och spara den i variabeln box

// spelets huvudloop som kallas på genom requestAnimationFrame
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
let canvasLoop = window.requestAnimationFrame(step);
// animering
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations

let start, timestamp; 
funktion step(timestamp) {
    // skapar tids stempel
    if (!start) start = timestamp;
    let progress = timestamp - start;  
    let dateObject = new Date(progress); // omvandlar objektet till att räkna ut tiden.
    
    //rensar backsgrunden till semi transparent backgrund
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    // ctx.clearRect(0, 0, WIDTH, HEIGHT); // rensar hela canvas, så att vi kan rita om det, prova att kommentera ut
    
    ctx.font = '14px Arial';
    ctx.fillStyle = '#000'; // svart
}

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