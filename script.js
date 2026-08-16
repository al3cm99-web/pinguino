const video =
    document.getElementById("penguinVideo");

const heartButton =
    document.getElementById("heartButton");

const heartContainer =
    document.getElementById("heartContainer");


let rainStarted = false;


/*
=================================
FINE DEL VIDEO
=================================
*/

video.addEventListener("ended", () => {

    /*
        Manteniamo praticamente
        l'ultimo fotogramma del video.
    */

    if (video.duration) {

        video.currentTime =
            Math.max(
                0,
                video.duration - 0.05
            );

    }


    /*
        Facciamo comparire
        il cuore centrale.
    */

    heartButton.classList.add("show");

});


/*
=================================
CLICK SUL CUORE CENTRALE
=================================
*/

heartButton.addEventListener("click", () => {

    if (rainStarted) {
        return;
    }


    rainStarted = true;


    /*
        Nascondiamo il cuore centrale.
    */

    heartButton.classList.remove("show");


    /*
        Parte la cascata.
    */

    startHeartRain();

});


/*
=================================
CREAZIONE DI UN CUORE
=================================
*/

function createHeart(pileHeight) {

    const heart =
        document.createElement("div");


    heart.classList.add("falling-heart");


    /*
        SOLO CUORE ROSSO.
    */

    heart.textContent = "❤️";


    /*
        Dimensione casuale.
    */

    const size =
        Math.random() * 35 + 35;


    heart.style.fontSize =
        size + "px";


    /*
        Posizione casuale
        da sinistra a destra.
    */

    const maxLeft =
        window.innerWidth - size;


    heart.style.left =
        Math.random() * maxLeft + "px";


    /*
        Il cuore si ferma in un punto
        casuale dentro la parte
        già riempita dello schermo.
    */

    const randomPilePosition =
        Math.random() * pileHeight;


    let finalY =
        window.innerHeight
        - randomPilePosition
        - size;


    /*
        Evitiamo che salga oltre
        la parte superiore.
    */

    if (finalY < 0) {
        finalY = Math.random() * 20;
    }


    /*
        Distanza percorsa partendo
        da sopra lo schermo.
    */

    heart.style.setProperty(
        "--fall-distance",
        (finalY + 100) + "px"
    );


    /*
        Velocità casuale.
    */

    const duration =
        Math.random() * 1.2 + 1.5;


    heart.style.setProperty(
        "--duration",
        duration + "s"
    );


    /*
        Rotazione casuale.
    */

    const rotation =
        Math.random() * 180 - 90;


    heart.style.setProperty(
        "--rotation",
        rotation + "deg"
    );


    /*
        Inseriamo il cuore.

        NON viene mai eliminato.
    */

    heartContainer.appendChild(heart);

}


/*
=================================
CASCATA + ACCUMULO
=================================
*/

function startHeartRain() {

    /*
        Altezza iniziale
        dell'accumulo.
    */

    let pileHeight = 70;


    /*
        Creiamo una nuova ondata
        ogni 120 millisecondi.
    */

    const rain =
        setInterval(() => {


            /*
                Ogni ondata crea
                12 cuori.
            */

            for (
                let i = 0;
                i < 12;
                i++
            ) {

                createHeart(pileHeight);

            }


            /*
                L'accumulo sale
                progressivamente.
            */

            pileHeight += 22;


            /*
                Quando abbiamo raggiunto
                tutta l'altezza dello schermo...
            */

            if (
                pileHeight >=
                window.innerHeight + 100
            ) {

                clearInterval(rain);


                /*
                    Ultima ondata molto intensa
                    per coprire eventuali spazi.
                */

                finalHeartExplosion();

            }


        }, 120);

}


/*
=================================
RIEMPIMENTO FINALE
=================================
*/

function finalHeartExplosion() {

    let waves = 0;


    const finalRain =
        setInterval(() => {


            for (
                let i = 0;
                i < 20;
                i++
            ) {

                createHeart(
                    window.innerHeight + 100
                );

            }


            waves++;


            /*
                Dopo alcune ondate
                fermiamo la generazione.

                Tutti i cuori già creati
                restano sullo schermo.
            */

            if (waves >= 12) {

                clearInterval(finalRain);

            }


        }, 100);

}
