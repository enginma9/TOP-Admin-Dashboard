

const lightButton = document.getElementById("nightDay");

function letThereBeLight(){
    const headerSection = document.getElementById("header");
    const cardsSection = document.getElementById("cards");
    const glassSection = document.getElementById("glass");

    if( headerSection.classList.contains("night") ){
        headerSection.classList.remove("night");
    } else {
        headerSection.classList.add("night");
    }

    if( cardsSection.classList.contains("night") ){
        cardsSection.classList.remove("night");
    } else {
        cardsSection.classList.add("night");
    }

    if( glassSection.classList.contains("night") ){
        glassSection.classList.remove("night");
    } else {
        glassSection.classList.add("night");
    }
}

lightButton.addEventListener( "click", letThereBeLight );