// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function palindroma(parola) {
    let split=parola.split("")
    let reverse=split.reverse()
    parolaAlContrario= reverse.join("")
    console.log(parolaAlContrario)
    if(parola==parolaAlContrario){
        return "ok"
    } else{
        return "no"
    }

}
let parola=prompt("inserisci una parola")
console.log(palindroma(parola))

if(palindroma(parola) == "ok"){
    document.getElementById("cont").innerHTML="la parola è palindroma"
} else{
    document.getElementById("cont").innerHTML="la parola non è palindroma"
}


