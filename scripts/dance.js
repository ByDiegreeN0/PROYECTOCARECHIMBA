
let papaNoel = "off";
let muñecoOff = document.querySelector('.papaNoelOnfOff')
let botonSonido = new Audio('../src/sound/botonbailar.mp3'); // Ruta corregida para el archivo de sonido
let musica = new Audio('../src/sound/allWant.mp3'); // Ruta corregida para el archivo de sonido

// Función para cambiar la imagen de Papá Noel por el GIF y reproducir música
function bailar() {
    if (papaNoel == "off") {
        papaNoel = "on";
        muñecoOff.classList.add("on");
        botonSonido.play(); // Reproducir sonido
        musica.play(); // Reproducir música
    } else {
        papaNoel = "off";
        muñecoOff.classList.remove("on");
        botonSonido.pause(); // Pausar sonido si está activo
        musica.pause(); // Pausar música si está activa
    }
}
muñecoOff.addEventListener('click', bailar);

// bailar cuando la resta de los tiempos de 0 

FechaActual = new Date;
botonesPapaNoel = document.querySelector('navidad-btn');

function bailarAlFinalizarContador(FechaLimite, FechaActual){
    let resultadoFechas = FechaLimite - FechaActual;

    if(resultadoFechas <= 0){
        botonesPapaNoel.removeAttribute("disable")
        bailar();
    }
}
bailarAlFinalizarContador(FechaLimite, FechaActual)

