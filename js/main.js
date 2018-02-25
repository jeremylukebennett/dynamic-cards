"use strict";


let button = document.getElementById("create-btn");

button.addEventListener("click", function() {

    let userInput = document.getElementById("text-input");
    // document.getElementById("cards").innerHTML = userInput.value;

console.log(userInput.value);

    var newDiv = document.createElement("div").setAttribute("id", "card1");
    var newContent = document.createTextNode(userInput.value);
    newDiv.appendChild(newContent);
});


console.log("testing now");




































// let runFunction = require("./domPrint");

// let button = document.getElementById("create-btn");





// button.addEventListener("click", function() {
//     let userInput = document.getElementById("text-input");
//     console.log(userInput.value);

//     document.getElementsByClassName("cards").innerHTML = userInput.value;



    

// });

