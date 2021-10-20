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

let bombeGenerate = [];

buttonPlayGame.addEventListener("click", function () {
    const livelloScelto = parseInt(gameDifficult.value);
    const boxesToCreate = quantityBoxes(livelloScelto);
    generateBoxes(boxesToCreate);
    bombeGenerate = generaBombeTotali(16, boxesToCreate);
    console.log(bombeGenerate);

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

    // leggo l'array bombeGenerate 
    // e controllo se in quel numero di quella specifica cella 
    // è un numero che corrisponde ad una bomba
    const cellaClickata = parseInt(this.textContent);
    console.log(`cella clickata #${cellaClickata}`);

    if (bombeGenerate.includes(cellaClickata)) {
        this.classList.add("bomb");
    } else {
        this.classList.add("box-on-click");
    }
    return boxOnClick;
}


// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento. (modificato) 

/*
1 Creo l'array vuoto che conterrà il numero di bombe totali
    i numeri casuali aumenteranno in base alle difficoltà 
    (numero massimo in easy: 100, numero massimo in medium: 81...)
2 i numeri dentro l'array non possono essere doppi
3 al click su ogni cella (funzione gia creata)
    se il numero clickato appartiene all'array cioè appartiene ad una boma
        - alert preso una bomba
        - cella diventa rossa
    altrimenti continua a clickare su altre celle
4 la partita finisce quando si clicka su una cella rossa
    e finisce anche quando il numero di celle blu diventa il massimo 
    (livello easy 100-16=84 celle blu e le altre saranno rosse, ecc)
5 alla fine della partita bisognerà 
    - mostrare tutte le bombe nascoste 
    - e mostrare il punteggio (ogni click fatto su un contatore)
*/

// il secondo attributo lo si definisce dentro al click del play button cosi genererà le bombe
function generaBombeTotali(bombeTotali, numeroMaxBoxLivello) {
    // array per inserire le bombe con numero random
    let arrayBombe = [];
    //  variabile per ripetere il ciclo for : j
    let j = 0;
    // creo ciclo per generale le 16 bombe
    for (i = 0; i < 16; i++) {
        const bombaCreata = generaNumeroRandom(1, numeroMaxBoxLivello);
        // numero boxes in base al livello = const boxestocreate
        let numeroDoppio = arrayBombe.includes(bombaCreata);
        if (!numeroDoppio) {
            arrayBombe.push(bombaCreata);
        } else {
            i--;
        }
        j++;
    }
    // controllo i numeri creati dentro l'array
    console.log(arrayBombe);
    // controllo quante volte si è creato il ciclo for
    console.log(`il ciclo si è effetuato ${j} volte`);
    // controllo l'ordine dell'array per sapere se ci sono doppioni o no
    let orderArray = arrayOrdinato(arrayBombe);
    console.log(orderArray);

    return arrayBombe;
}


function generaNumeroRandom(minNumber, maxNumber) {
    const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return numRandom;
}

function arrayOrdinato(array) {
    const arrayOrdinato = array.sort((a, b) => a - b);
    return arrayOrdinato;
}