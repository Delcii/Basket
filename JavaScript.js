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

function drawProjectileMotion() {
    let x = 0;
    let y = 0;
    let t = 0;

    const interval = setInterval(() => {

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.beginPath();
        context.moveTo(500, 300);
        context.lineTo(580, 300);
        context.stroke();

        context.drawImage(persona, -110, 330, 350, 350 * persona.height / persona.width);

        t += fps;
        x = velocita.value * Math.cos((angolo.value * Math.PI) / 180) * t;
        y = velocita.value * Math.sin((angolo.value * Math.PI) / 180) * t - (0.5 * 9.81 * t * t);

        context.beginPath();
        let pat = context.createPattern(palla, "no-repeat");
        context.strokeStyle = pat;
        context.arc((x * scale)+10, (canvas.height - y * scale)-50, 5, 0, 2 * Math.PI);
        context.fill();

        if (y <= 0) {
            clearInterval(interval);
        }
    }, fps * 1000);
}

function inizio() {
    context.beginPath();
    context.moveTo(500, 300);
    context.lineTo(580, 300);
    context.stroke();
    context.drawImage(persona, -110, 330, 350, 350 * persona.height / persona.width);
    context.drawImage(palla, 200, 200, 50, 50 * palla.height / palla.width);
}
