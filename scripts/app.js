// main.js
let papaNoel = "off";
const muñecoOff = document.querySelector('.papaNoelOnfOff');
const botonSonido = new Audio('src/sound/botonbailar.mp3');
const musica = new Audio('src/sound/allWant.mp3');

// Función para cambiar la imagen de Papá Noel por el GIF y reproducir música
function bailar() {
    if (papaNoel === "off") {
        papaNoel = "on";
        muñecoOff.classList.add("on");
        botonSonido.play(); // Reproducir sonido
        musica.play(); // Reproducir música
        document.querySelectorAll('.navidad-btn').forEach(btn => btn.classList.add('on')); // Agregar clase "on" a todos los botones
    } 
}

// Función para pausar la música y revertir la imagen de Papá Noel al estado inicial
function pause() {
    if (papaNoel === "on") {
        papaNoel = "off";
        muñecoOff.classList.remove("on");
        botonSonido.pause(); // Pausar sonido si está activo
        musica.pause(); // Pausar música si está activa
        document.querySelectorAll('.navidad-btn').forEach(btn => btn.classList.remove('on')); // Quitar clase "on" a todos los botones
    }
}

muñecoOff.addEventListener('click', bailar);

// Define la fecha límite para la cuenta regresiva (25 de diciembre de 2024)
const FechaLimite = new Date('2024-07-19T17:29:30');

// Función que calcula el tiempo restante hasta la fecha límite
function obtenerTiempoFaltante(FechaLimite) {
    // Obtiene la fecha y hora actual
    const tiempoActual = new Date();
    // Calcula el tiempo restante en segundos
    let tiempoFaltante = (FechaLimite - tiempoActual + 1000) / 1000;

    // Si el tiempo restante es menor o igual a 0, devuelve todos los valores en 0
    if (tiempoFaltante <= 0) {
        return {
            diasFaltantes: 0,
            horasFaltantes: 0,
            minutosFaltantes: 0,
            segundosFaltantes: 0
        };
    }

    // Calcula los valores de días, horas, minutos y segundos restantes
    const segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    const minutosFaltantes = ('0' + Math.floor((tiempoFaltante / 60) % 60)).slice(-2);
    const horasFaltantes = ('0' + Math.floor((tiempoFaltante / 3600) % 24)).slice(-2);
    const diasFaltantes = Math.floor(tiempoFaltante / 86400);

    // Devuelve un objeto con los valores calculados
    return {
        diasFaltantes,
        horasFaltantes,
        minutosFaltantes,
        segundosFaltantes
    };
}

// Función para configurar y mostrar la cuenta regresiva
function cuentaRegresiva(FechaLimite, reloj, mensaje) {
    // Obtiene el elemento HTML donde se mostrará la cuenta regresiva
    const r = document.getElementById(reloj);

    // Configura un intervalo para actualizar la cuenta regresiva cada segundo
    const tiempoActual = setInterval(() => {
        // Obtiene el tiempo faltante utilizando la función definida anteriormente
        const t = obtenerTiempoFaltante(FechaLimite);

        // Actualiza el contenido HTML con los valores de la cuenta regresiva
        r.innerHTML = `        
            <div class="navidad-tittle">
                <h1>${mensaje}</h1>
            </div>

            <div class="navidad-content">
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>${t.diasFaltantes}</p>
                    </div>
                    <p>D</p>
                </div>
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>${t.horasFaltantes}</p>
                    </div>
                    <p>H</p>
                </div>
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>${t.minutosFaltantes}</p>
                    </div>
                    <p>M</p>
                </div>
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>${t.segundosFaltantes}</p> 
                    </div>
                    <p>S</p>
                </div>
            </div>

            <div class="navidad-buttons">
                <button class="navidad-btn" disabled onclick="bailar()">Play</button>
                <button class="navidad-btn" disabled onclick="pause()">Pause</button>
            </div>`;

        // Si la fecha límite se ha alcanzado, detiene el intervalo y actualiza el contenido HTML
        if (FechaLimite <= new Date()) {
            clearInterval(tiempoActual);
            r.innerHTML = `        
            <div class="navidad-tittle">
                <h1>¡Feliz Navidad!</h1>
            </div>

            <div class="navidad-content">
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>00</p>
                    </div>
                    <p>D</p>
                </div>
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>00</p>
                    </div>
                    <p>H</p>
                </div>
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>00</p>
                    </div>
                    <p>M</p>
                </div>
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>00</p>
                    </div>
                    <p>S</p>
                </div>
            </div>

            <div class="navidad-buttons">
                <button class="navidad-btn" onclick="bailar()">Play</button>
                <button class="navidad-btn" onclick="pause()">Pause</button>
            </div>`;

            // Inicia la música y cambia el estado de los botones al finalizar el tiempo
            bailar();
        }
    }, 1000); // Actualiza cada segundo
}

// Llama a la función cuentaRegresiva con la fecha límite y el ID del elemento HTML
cuentaRegresiva(FechaLimite, 'reloj', 'Faltan para Navidad');