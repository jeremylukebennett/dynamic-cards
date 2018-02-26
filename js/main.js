"use strict";


let button = document.getElementById("create-btn");
var counter = 0;

button.addEventListener("click", function(e) {
    e.preventDefault();
    counter = counter += 1;
    let userInput = document.getElementById("text-input").value;

    var card = document.createElement("div");
    card.setAttribute("id", "card" + counter);
    var wrapper = document.getElementById("wrapper");
    wrapper.appendChild(card);
    var myCard = document.getElementById("card" + counter);
    myCard.innerHTML = `<p>${userInput}</p><br><button id="delete-${counter}">DELETE</button>`;
});


console.log("testing now");




































// let runFunction = require("./domPrint");

// let button = document.getElementById("create-btn");





// button.addEventListener("click", function() {
//     let userInput = document.getElementById("text-input");
//     console.log(userInput.value);

//     document.getElementsByClassName("cards").innerHTML = userInput.value;



    

// });

