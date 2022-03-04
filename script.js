console.log('JS OK');

// l programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.




const distanceMultiplier = 0.21;
const discount20 = 0.20;
const discount40 = 0.40;


//Asking user age and distance
const age = parseInt(prompt('Inserisci la tua età: '));
console.log(age);
const distance = parseInt(prompt('Inserisci i kilometri da percorrere'));
console.log(distance);

//checking if user input is NaN and display alert if so
if (isNaN(age) || isNaN(distance)) {
    alert('Non scherzare, inserisci la tua vera età e i kilometri da percorrere.');
}

//multiplying distance * distanceMultiplier to get full ticket price
let ticketPrice = distance * distanceMultiplier;
console.log('ticket price multiplied', ticketPrice);


//check if age is between 0 and 18 and apply 20%discount, check if age is between 65 and 120 and apply 40%discount, 
// check if less than 0 or more than 120 and ask user to get serious, else make pay full ticket 
if (age > 0 && age < 18) {
    ticketPrice = ticketPrice - (ticketPrice * discount20);
    console.log('You are underage, 20% discount - ', ticketPrice);
}else if(age > 65 && age <= 120){
    ticketPrice = ticketPrice - (ticketPrice * discount40);
    console.log('You are elderly, 40% discount - ', ticketPrice);
}else if (age < 0 || age > 120) {
    console.log('Get serious and insert your real age'); 
}else {
    console.log('You are between 18 and 65, you get full price - ', ticketPrice);
}

//fix price to 2 decimals
ticketPrice = ticketPrice.toFixed(2);
console.log(ticketPrice);



//print in h1 final ticket price
document.getElementById("ticket-price").innerText = `You pay: ${ticketPrice}€`;






