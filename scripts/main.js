// Función para obtener el tiempo faltante
let FechaLimite = new Date('2024-07-18');

function obtenerTiempoFaltante(FechaLimite) {
    let tiempoActual = new Date();
    let tiempoFaltante = (FechaLimite - tiempoActual + 1000) / 1000;

    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor((tiempoFaltante / 60) % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor((tiempoFaltante / 3600) % 24)).slice(-2);
    let diasFaltantes = Math.floor(tiempoFaltante / 86400);

    return {
        diasFaltantes,
        horasFaltantes,
        minutosFaltantes,
        segundosFaltantes
    };
}






// Función para configurar la cuenta regresiva
function cuentaRegresiva(FechaLimite, reloj, mensaje) {
    const r = document.getElementById(reloj);

    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(FechaLimite);

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
        
        if (FechaLimite <= new Date()) {
            clearInterval(tiempoActual);
            r.innerHTML = mensaje;
        }

    }, 1000);
}

// Llamada a la función cuentaRegresiva con la fecha límite como objeto Date
cuentaRegresiva(FechaLimite, 'reloj', '¡Feliz Navidad!');




