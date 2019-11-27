
// https://github.com/jensnti/gamesystem gamesystem
// https://github.com/jensnti/wu2-spel/tree/master/docs sidescroller
// https://github.com/jensnti/wu2-canvas/tree/master/docs canvas


// fyrkant

let canvas = document.createElement('canvas'); // skapa canvaselementet
let ctx = canvas.getContext('2d'); // spara canvaselementets context, vi behöver det för att kunna rita
canvas.setAttribute("class", "border"); // ge canvas klassen border så vi markerar ut det
canvas.width  = 5000; // sätt elementets bredd
canvas.height = 5000; // ... & höjd
ctx.fillStyle = 'yellow';
ctx.fillRect(100,300,100,100)

// circel

ctx.beginPath()
ctx.arc(100,105,100,0,2 * Math.PI) // y per px, x per px, 100 radie, ?
ctx.fillStyle = 'red';
ctx.strokeStyle = "rgba(0 ,0,200, 0.7)"; 
ctx.lineWidth = '100';
ctx.stroke();
ctx.fill();


// linje

ctx.beginPath();
ctx.moveTo(400,100);
ctx.lineTo(100,1000);
ctx.stroke();
ctx.strokeStyle = getRandomColor(0,8);
ctx.lineWidth = '22';

function getRandomColor(alpha) {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + "," +  (alpha ? alpha : 1) + ")";
}

// text

ctx.font = '90px Arial';
ctx.fillStyle = '#000';
ctx.textAlign = 'center';
ctx.fillText("Text på canvas121212122121786786212121212", 1500, 500);

// bild

let img = new Image();
img.src = 'stick.png';
img.onload = function() {
    ctx.drawImage(img, 800, 850, 556, 656);
};



let main = document.getElementsByTagName('main')[0]; // hämta main elementet från vårt HTML dokument
main.appendChild(canvas); // lägg till canvaselementet i main i HTML dokumentet