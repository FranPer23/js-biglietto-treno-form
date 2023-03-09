const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function() {
    const result = document.getElementById("result");
    

    // input del consumatore
    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;
    console.log (userName)

    const userKmInput = document.getElementById("user-km");
    const userKm = userKmInput.value;
    console.log (userKm)

    let userAgeInput = document.getElementById("user-age");
    let userAge = userAgeInput.value;
    console.log (userAge)
    


// calcolo del prezzo del biglietto
const kmPrice = 0.21;
const  ticketPriceFull = kmPrice * userKm

let ticketPrice = ticketPriceFull;

 let userMin = "minorenne";
 let userSenior = "over 65";

if (userAge = userMin) {
    ticketPrice = ticketPriceFull - (ticketPriceFull * 20 / 100);

} else if (userAge = userSenior) {
    
    ticketPrice = ticketPriceFull - (ticketPriceFull * 40 / 100);
}

// risultato con dati consumatore e prezzo
result.innerHTML = ` ${userName}, devi percorrere km ${userKm} il prezzo è ${ticketPrice.toFixed(2)}`;

userAgeInput.value="";
userKmInput.value="";
userNameInput.value="";

})

