const video =
    document.getElementById("penguinVideo");

const heartButton =
    document.getElementById("heartButton");

const heartContainer =
    document.getElementById("heartContainer");


let rainStarted = false;


/* ==============================
   FINE VIDEO
============================== */

video.addEventListener("ended", () => {

    /*
        Riportiamo il video praticamente
        sull'ultimo frame.

        Serve perché alcuni browser,
        alla fine del video,
        potrebbero mostrare uno sfondo nero.
    */

    if (video.duration) {

        video.currentTime =
            Math.max(0, video.duration - 0.05);

    }


    /*
        Mostriamo il cuore centrale.
    */

    heartButton.classList.add("show");

});


/* ==============================
   CLICK CUORE
============================== */

heartButton.addEventListener("click", () => {

    /*
        Evitiamo più avvii contemporanei.
    */

    if (rainStarted) {
        return;
    }

    rainStarted = true;


    /*
        Nascondiamo il cuore centrale.
    */

    heartButton.classList.remove("show");


    /*
        Avviamo la pioggia.
    */

    startHeartRain();

});


/* ==============================
   CREA UN CUORE
============================== */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.classList.add("falling-heart");


    /*
        Tipologie diverse di cuore.
    */

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💓",
        "💞"
    ];


    const randomHeart =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];


    heart.textContent = randomHeart;


    /*
        Posizione orizzontale casuale.
    */

    heart.style.left =
        Math.random() * 100 + "vw";


    /*
        Dimensione casuale.
    */

    const size =
        Math.random() * 45 + 25;

    heart.style.fontSize =
        size + "px";


    /*
        Velocità casuale.

        Alcuni cadono più velocemente,
        altri più lentamente.
    */

    const duration =
        Math.random() * 2 + 2;

    heart.style.animationDuration =
        duration + "s";


    /*
        Piccolo ritardo casuale.
    */

    heart.style.animationDelay =
        Math.random() * 0.3 + "s";


    heartContainer.appendChild(heart);

}


/* ==============================
   PIOGGIA DI CUORI
============================== */

function startHeartRain() {

    /*
        FASE 1

        All'inizio pochi cuori.
    */

    let heartsPerWave = 3;

    let intervalTime = 250;


    const rain =
        setInterval(() => {

            for (
                let i = 0;
                i < heartsPerWave;
                i++
            ) {

                createHeart();

            }

        }, intervalTime);


    /*
        Dopo 2 secondi
        aumentiamo la quantità.
    */

    setTimeout(() => {

        heartsPerWave = 7;

    }, 2000);


    /*
        Dopo 4 secondi
        diventano tantissimi.
    */

    setTimeout(() => {

        heartsPerWave = 15;

    }, 4000);


    /*
        Dopo 6 secondi
        vera valanga di cuori.
    */

    setTimeout(() => {

        heartsPerWave = 25;

    }, 6000);

}