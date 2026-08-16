const video =
    document.getElementById("penguinVideo");


const openLetterButton =
    document.getElementById("openLetter");


const letterScreen =
    document.getElementById("letterScreen");



/* =========================
   FINE VIDEO
========================= */

video.addEventListener(
    "ended",
    () => {


        /*
        Torniamo leggermente indietro
        per mantenere visibile
        l'ultimo fotogramma.
        */

        if (video.duration) {

            video.currentTime =
                Math.max(
                    0,
                    video.duration - 0.05
                );

        }


        /*
        Mostriamo il pulsante
        */

        openLetterButton
            .classList
            .add("show");

    }
);



/* =========================
   CLICK APRI LETTERA
========================= */

openLetterButton.addEventListener(
    "click",
    () => {


        /*
        Nascondiamo il pulsante
        */

        openLetterButton
            .classList
            .remove("show");


        /*
        Mostriamo la schermata
        della lettera
        */

        letterScreen
            .classList
            .add("show");

    }
);
