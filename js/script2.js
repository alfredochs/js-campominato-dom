
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
