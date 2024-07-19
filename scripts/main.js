// Define la fecha límite para la cuenta regresiva (25 de diciembre de 2024)
let FechaLimite = new Date('2024-06-25');

// Función que calcula el tiempo restante hasta la fecha límite
function obtenerTiempoFaltante(FechaLimite) {
    // Obtiene la fecha y hora actual
    let tiempoActual = new Date();
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
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor((tiempoFaltante / 60) % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor((tiempoFaltante / 3600) % 24)).slice(-2);
    let diasFaltantes = Math.floor(tiempoFaltante / 86400);

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
        let t = obtenerTiempoFaltante(FechaLimite);

        // Actualiza el contenido HTML con los valores de la cuenta regresiva
        r.innerHTML = `        
            <div class="navidad-tittle">
                <h1>Faltan para Navidad</h1>
            </div>

            <div class="navidad-content">
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>${t.diasFaltantes}</p>
                    </div>
                </div>
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>${t.horasFaltantes}</p>
                    </div>
                </div>
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>${t.minutosFaltantes}</p>
                    </div>
                </div>
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>${t.segundosFaltantes}</p>
                    </div>
                </div>
            </div>

            <div class="navidad-buttons">
                <button class="navidad-btn" disabled onclick="bailar()">Play</button>
                <button class="navidad-btn" disabled  onclick="bailar()">Pause</button>
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
                </div>
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>00</p>
                    </div>
                </div>
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>00</p>
                    </div>
                </div>
                <div class="navidad-box">
                    <div class="navidad-box-content">
                        <p>00</p>
                    </div>
                </div>
            </div>

            <div class="navidad-buttons">
                <button class="navidad-btn" onclick="bailar()">Play</button>
                <button class="navidad-btn" onclick="bailar()">Pause</button>
            </div>`;
        }
    }, 1000); // Actualiza cada segundo
}

// Llama a la función cuentaRegresiva con la fecha límite y el ID del elemento HTML
cuentaRegresiva(FechaLimite, 'reloj', '¡Feliz Navidad!');




