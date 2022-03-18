// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function parDis(numUtente){
    let num=Math.floor(Math.random() * 5 +1)
    somma= num + numUtente
    console.log(somma)
    if(somma%2==0){
        return "pari"
    } else{
        return "dispari"
    }
}

let somma=0
let pariDispari=prompt("scegli pari o dispari")
let numUtente=parseInt(prompt("inserisci un numero"))
console.log(parDis(numUtente))
console.log(numUtente)
if(parDis(numUtente)=="pari" && pariDispari=="pari" || parDis(numUtente)=="dispari" && pariDispari=="dispari"){
    document.getElementById("cont").innerHTML="complimenti hai vinto"
} else{
    document.getElementById("cont").innerHTML="riprova"
}


document.getElementById("tuoNum").innerHTML=`il tuo numero è ${numUtente}`
