const IDIOMAS_PREFERIDOS = ["es-MX", "es-US", "es-ES", "es_US", "es_ES"];

// Esperar a que el que DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    //const $voces = document.querySelector("#voces"),
    $botoniniciar = document.querySelector("#btnEscuchar"),
        $botoncancelar = document.querySelector("#btnPausarleer"),
        $mensaje = document.querySelector("#mensaje");
    let posibleIndice = 0,
        vocesDisponibles = [];
    let synth = window.speechSynthesis; // abbreviation

    // Función que pone las voces dentro del select
    const cargarVoces = () => {
        if (vocesDisponibles.length > 0) {
            console.log("No se cargan las voces porque ya existen: ", vocesDisponibles);
            return;
        }
        vocesDisponibles = speechSynthesis.getVoices();
        console.log({ vocesDisponibles })
        posibleIndice = vocesDisponibles.findIndex(voz => IDIOMAS_PREFERIDOS.includes(voz.lang));
        if (posibleIndice === -1) posibleIndice = 0;
        vocesDisponibles.forEach((voz, indice) => {
            const opcion = document.createElement("option");
            opcion.value = indice;
            opcion.innerHTML = voz.name;
            opcion.selected = indice === posibleIndice;
            //$voces.appendChild(opcion);
        });
    };

    // Si no existe la API, lo indicamos
    if (!'speechSynthesis' in window) return alert("Lo siento, tu navegador no soporta esta tecnología");

    // No preguntes por qué pongo esto que se ejecuta dos veces
    // en determinados casos, solo así funciona en algunos casos
    cargarVoces();
    // Si hay evento, entonces lo esperamos
    if ('onvoiceschanged' in speechSynthesis) {
        speechSynthesis.onvoiceschanged = function() {
            cargarVoces();
        };
    }

    // El click del botón. Aquí sucede la magia
    $botoniniciar.addEventListener("click", () => {
        let textoAEscuchar = $mensaje.textContent;
        //if (!textoAEscuchar) return alert("Escribe el texto");
        let mensaje = new SpeechSynthesisUtterance();
        //mensaje.voice = vocesDisponibles[$voces.value];
        mensaje.volume = 1;
        mensaje.rate = 1;
        mensaje.text = textoAEscuchar;
        mensaje.pitch = 1;
        // ¡Parla!
        speechSynthesis.speak(mensaje);
    });

    $botoncancelar.addEventListener("click", () => {
        speechSynthesis.cancel(mensaje);
    });
});



const IDIOMAS_PREFERIDOS2 = ["es-MX", "es-US", "es-ES", "es_US", "es_ES"];

// Esperar a que el que DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    //const $voces = document.querySelector("#voces"),
    $botoniniciar2 = document.querySelector("#btnEscuchar2"),
        $botoncancelar2 = document.querySelector("#btnPausarleer2"),
        $mensaje2 = document.querySelector("#mensaje2");
    let posibleIndice2 = 0,
        vocesDisponibles2 = [];
    let synth2 = window.speechSynthesis; // abbreviation

    // Función que pone las voces dentro del select
    const cargarVoces2 = () => {
        if (vocesDisponibles2.length > 0) {
            console.log("No se cargan las voces porque ya existen: ", vocesDisponibles2);
            return;
        }
        vocesDisponibles2 = speechSynthesis.getVoices();
        console.log({ vocesDisponibles2 })
        posibleIndice2 = vocesDisponibles2.findIndex(voz => IDIOMAS_PREFERIDOS2.includes(voz.lang));
        if (posibleIndice2 === -1) posibleIndice2 = 0;
        vocesDisponibles2.forEach((voz, indice) => {
            const opcion = document.createElement("option");
            opcion.value = indice;
            opcion.innerHTML = voz.name;
            opcion.selected = indice === posibleIndice2;
            //$voces.appendChild(opcion);
        });
    };

    // Si no existe la API, lo indicamos
    if (!'speechSynthesis' in window) return alert("Lo siento, tu navegador no soporta esta tecnología");

    // No preguntes por qué pongo esto que se ejecuta dos veces
    // en determinados casos, solo así funciona en algunos casos
    cargarVoces2();
    // Si hay evento, entonces lo esperamos
    if ('onvoiceschanged' in speechSynthesis) {
        speechSynthesis.onvoiceschanged = function() {
            cargarVoces2();
        };
    }

    // El click del botón. Aquí sucede la magia
    $botoniniciar2.addEventListener("click", () => {
        let textoAEscuchar = $mensaje2.textContent;
        //if (!textoAEscuchar) return alert("Escribe el texto");
        let mensaje = new SpeechSynthesisUtterance();
        //mensaje.voice = vocesDisponibles2[$voces.value];
        mensaje.volume = 1;
        mensaje.rate = 1;
        mensaje.text = textoAEscuchar;
        mensaje.pitch = 1;
        // ¡Parla!
        speechSynthesis.speak(mensaje);
    });

    $botoncancelar2.addEventListener("click", () => {
        speechSynthesis.cancel(mensaje);
    });
});