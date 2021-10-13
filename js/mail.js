/*
1.creare array con l'elenco degli indirizzi email di chi può accedere
2.creare un prompt in cui l'utente inserisce l'indirzzo mail per la verifica (i valori devono essere lowcase)
4.creazione del ciclo per il controllo
5.se l'indirizzo mail è presente nell'elenco degli indirizzi email di chi può accedere --> alert: puoi accedere
  se l'indirizzo mail non è presente nell'elenco degli indirizzi email di chi può accedere --> alert: non puoi accedere

 */

const usersList = ["banana@gmail.it", "peach@hotmail.com", "papaya@yahoo.it", "orange@email.com", "strawberry@fruit.it"];

const userEmail = prompt("inserisci il tuo indirizzo e-mail:").toLowerCase();

console.log(userEmail);

let userConfirmed = false;

for (let index = 0; index < usersList.length; index++) {
    const userCheck = usersList[index];

   // console.log(userCheck);

   if (userEmail === userCheck) {
    userConfirmed = true;
   }
}

if (!userConfirmed) {
    alert("Non puoi accedere");
} else {
    alert("Puoi accedere");
}



