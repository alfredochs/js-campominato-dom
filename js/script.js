// Consegna
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

/*
1 PRENDO gli elementi dal Dom
    -Livello da scegliere
    -Bottone Inzio Gioco
2 VALUTO il livello scelto
    -easy
    -medium
    -hard
3 Al CLICK sul bottone play dovrò SAPERE quante celle dovrò creare
    SE: - easy 100
    Se: - medium 81
    Se: - hard 49 

4 Al CLICK dovro GENERARE celle in base alla difficoltà

Versione Florian
- avere una select che permette di scegliere fra 3 difficoltà
  - in base alla difficoltà scelta, dobbiamo disegnare PIU' o MENO celle / quadratini
- vicino al select, dobbiamo creare un pulsante.
  - al click: (event listener)
    - Leggiamo il livello scelto dall'utente
    - In base al livello scelto, andiamo a generare e stampare in html la nostra griglia
      - questa dovrà tenere conto della scelta dell'utente
        per stampare il numero corretto di celle.
    
- una volta creata la griglia con le singole celle, al click su ogni cella,
  dobbiamo cambiare il suo colore.
*/



const gameDifficult = document.getElementById("game-difficult");
const buttonPlayGame = document.getElementById("play-button");
const generalSquare = document.getElementById("general-square");

buttonPlayGame.addEventListener("click", function () {
    const livelloScelto = parseInt(gameDifficult.value);
    const boxesToCreate = quantityBoxes(livelloScelto);
    generateBoxes(boxesToCreate);
    // console.log("il livello scelto è: ", livelloScelto);
    // console.log(`box da creare ${boxesToCreate}`);
});

function quantityBoxes(livelloScelto) {
    // let quantity;
    // switch (parseInt(livelloScelto)) {
    //     case 1: quantity = 100; break;
    //     case 2: quantity = 81; break;
    //     case 3: quantity = 49; break;
    // }
    // return quantity;

    //metto il let perchè il valore della "quantity" cambiarà in base alla scelta
    //qui otterrò la quantità di celle da generare
    let quantity;
    if (livelloScelto === 1) {
        quantity = 100;
    } else if (livelloScelto === 2) {
        quantity = 81;
    } else if (livelloScelto === 3) {
        quantity = 49;
    }
    return quantity;
}

function generateBoxes(boxesNumber) {
    // su riga 66 resetto quello generato sul generalSquare.
    // se non faccio questo reset le celle create si andranno
    // ad aggiungere sullo stesso generalSquare
    generalSquare.innerHTML = "";
    // calcolo le row delle celle che sarebbe la radice quadrata di 100,81,49
    const boxesXrow = Math.sqrt(boxesNumber);
    // calcolo la size di ogni cella con ???
    const boxesSize = 100 / boxesXrow;


    // ciclo per creare ogni singola cella
    //  e dichiarare la size e la classe assegnata su css
    // le aggiungo sul generalSquare con append

    //  e al click dovranno eseguire una funzione (dichiarata dopo)
    for (let i = 0; i < boxesNumber; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = boxesSize + "%";
        box.style.height = boxesSize + "%";
        generalSquare.append(box);
        box.textContent = i + 1;
        box.addEventListener("click", boxOnClick);
    }
}
function boxOnClick() {
    this.classList.toggle("box-on-click");
}
