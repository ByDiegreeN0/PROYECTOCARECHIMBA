
let papaNoel = "off";
let muñecoOff = document.querySelector('.papaNoelOnfOff')
const botonSonido = new Audio('src/sound/botonbailar.mp3');
const musica = new Audio('src/sound/allWant.mp3');

// Función para cambiar la imagen de Papá Noel por el GIF y reproducir música
function bailar() {
    if (papaNoel == "off") {
        papaNoel = "on";
        muñecoOff.classList.add("on");
        botonSonido.play(); // Reproducir sonido
        musica.play(); // Reproducir música
    } 

   
}

function pause() {
    if (papaNoel === "on") {
        papaNoel = "off";
        muñecoOff.classList.remove("on");
        botonSonido.pause(); // Pausar sonido si está activo
        musica.pause(); // Pausar música si está activa
    }
}

// bailar cuando la resta de los tiempos de 0 

FechaActual = new Date;
botonesPapaNoel = document.querySelector('navidad-btn');


