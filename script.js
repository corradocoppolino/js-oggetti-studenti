var arrStudenti = [
    {
        nome: "Mario",
        cognome: "Rossi",
        età: "18"
    },
    {
        nome: "Luigi",
        cognome: "Verdi",
        età: "17"
    },
    {
        nome: "Simone",
        cognome: "Bianchi",
        età: "16"
    }
];

var newNome = prompt("Inserisci il nome dello studente");
var newCognome = prompt("Inserisci il cognome");
var newEta = prompt("Inserisci l'età");

arrStudenti.push(aggiungiStudenti(newNome,newCognome,newEta));

for(var studente of arrStudenti){

    for(var key in studente){

        console.log("chiave: " + key + " valore: " + studente[key]);

    }

    console.log("------------------------");

}

function aggiungiStudenti(nomeStud,cognomeStud,etaStud){

    return stud= {
        nome: nomeStud,
        cognome: cognomeStud,
        eta: etaStud
    }

}

