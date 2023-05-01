
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Però questa volta lo portiamo da prompt a prendere le info da input in pagina.
// MILESTONE 1:
// Usando esclusivamente due input e un bottone realizziamo le specifiche scritte sopra.
// L'output sarà anch’esso da scrivere in console.
// MILESTONE 2: 
// Realizzeremo un form più completo in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
// Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina.



// Dichiaro le variabili
let userName, userKm, userEta, prezzoBiglietto, finalPrice, messaggio, buttonGenera, buttonAnnulla, offerta, appear;
offerta = document.getElementById('offerta');


// Dichiaro le costanti
const tariffaBiglietto = 0.21;


// Definisco il click sul bottone genera
buttonGenera = document.getElementById("genera");

buttonGenera.addEventListener('click',
    function() {
        appear = document.querySelector('.none');
        appear.classList.add('active');

        // Prendo dall'input il nome utente
        userName = document.getElementById("username").value;
        console.log(userName);

        // Prendo dall'input i km che l'user dovrà percorrere
        userKm = document.getElementById("userKm").value;
        console.log(userKm);

        // Chiedo l'età all'user
        userEta = document.getElementById("usereta").value;
        console.log(userEta);

        // Calcolo il prezzo del biglietto intero
        prezzoBiglietto = tariffaBiglietto * userKm
        console.log(prezzoBiglietto);

        // Istruzioni Condizionali
        if (userEta < 18) { // va applicato uno sconto del 20% per i minorenni

            finalPrice = prezzoBiglietto - (prezzoBiglietto * 0.2);
            offerta.innerHTML = "Sconto minorenni"

        } else if (userEta > 65) { // va applicato uno sconto del 40% per gli over 65

            finalPrice = prezzoBiglietto - (prezzoBiglietto * 0.4);
            offerta.innerHTML = "Sconto over65"

        } else { //quando non si è ne minorenni ne over 65

            finalPrice = prezzoBiglietto;
            offerta.innerHTML = "Biglietto Standard"
        }

        // Arrotondo il prezzo finale a massimo due cifre decimali
        finalPrice = finalPrice.toFixed(2);

        // Output
        document.getElementById('nome').innerHTML = userName;
        document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*10 + 1);
        document.getElementById('codicecp').innerHTML = Math.floor(Math.random()*10000);
        document.getElementById('ticket').innerHTML = finalPrice + "€";
        
    }
);

// Definisco il click sul bottone annulla
buttonAnnulla = document.getElementById("annulla");

buttonAnnulla.addEventListener('click',
    function() {
        appear.className = 'none';
    }
)






