const fps = 0.016;  //60
const scale = 10; // Scaling factor for the canvas

const angolo =document.getElementById("angolo");
const velocita = document.getElementById("velocita"); // m/s

const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d");

const persona = new Image();
persona.src = "stickman.png";

const palla = new Image();
palla.src = "palla.png";

const risultato = document.getElementById("risultato");
const pulsante = document.getElementById("pulsante");

function drawProjectileMotion() {
    pulsante.disabled = true;
    risultato.innerHTML = "";
    let canestro = new Boolean(false);
    let x = 0;
    let y = 0;
    let t = 0;

    const interval = setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.strokeStyle = "black";
        context.moveTo(500, 300);
        context.lineTo(580, 300);
        context.stroke();

        context.drawImage(persona, -110, 330, 350, 350 * persona.height / persona.width);
        t += fps;
        x = velocita.value * Math.cos((angolo.value * Math.PI) / 180) * t;
        y = velocita.value * Math.sin((angolo.value * Math.PI) / 180) * t - (0.5 * 9.81 * t * t);
        posX = (x*scale)+10;
        posY = (canvas.height - y * scale)-70;
        context.drawImage(palla, posX, posY, 35, 35);
        if(posX>=500 && posX<=580 && Math.abs(posY-300) < 5)    canestro = true;
        if ((canvas.height - y * scale) >= 535 || (x*scale)+10 >= 700) {
            clearInterval(interval);
            if(canestro == true)    risultato.innerHTML = "Bel canestro!";
            else    risultato.innerHTML = "Mancato!";
            pulsante.disabled = false;
        }
    }, fps * 1000);
    
    
}

function inizio() {
    context.beginPath();
    context.moveTo(500, 300);
    context.lineTo(580, 300);
    context.stroke();
    context.drawImage(persona, -110, 330, 350, 350 * persona.height / persona.width);
    context.drawImage(palla, -15, 420, 35, 35);
}
