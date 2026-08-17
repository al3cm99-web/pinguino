const screens =
    document.querySelectorAll(".screen");

const video =
    document.getElementById("wandaVideo");

const introText =
    document.getElementById("introText");

const talkButton =
    document.getElementById("talkButton");

const nextButtons =
    document.querySelectorAll(".nextButton");


let currentScreen = 0;


/* CAMBIO SCHERMATA */

function showScreen(index) {

    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    screens[index]
        .classList
        .add("active");


    currentScreen = index;

}


/* FINE VIDEO */

video.addEventListener("ended", () => {

    if (video.duration) {

        video.currentTime =
            Math.max(
                0,
                video.duration - 0.05
            );

    }


    introText
        .classList
        .add("show");


    setTimeout(() => {

        talkButton
            .classList
            .add("show");

    }, 2000);

});


/* PARLA CON MISTER WANDA */

talkButton.addEventListener("click", () => {

    showScreen(1);

});


/* FRECCE */

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (
            currentScreen <
            screens.length - 1
        ) {

            showScreen(
                currentScreen + 1
            );

        }

    });

});