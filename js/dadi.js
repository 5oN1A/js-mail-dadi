/*
1.creare il dado: numero random, intero, da 1 a 6 
2.creare variabile computer e assegnare un "dado"
3.creare variabile giocatore e assegnare un "dado"
4.
*/

let computerDie = Math.floor(Math.random() * 6) + 1;
    console.log(computerDie);

let playerDie = Math.floor(Math.random() * 6) + 1;
    console.log(playerDie);

if (computerDie > playerDie){
     alert("you lose!");
} else if (computerDie < playerDie){
    alert("you win!");
}else  {
    alert("even");
}