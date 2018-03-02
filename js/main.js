"use strict";


let createButton = document.getElementById("create-btn");
var counter = 0;



createButton.addEventListener("click", function(e) {
    e.preventDefault();
    counter = counter += 1;
    let userInput = document.getElementById("text-input").value;

    var card = document.createElement("div");
    card.setAttribute("id", "card" + counter);
    var wrapper = document.getElementById("wrapper");
    wrapper.appendChild(card);
    var myCard = document.getElementById("card" + counter);
    myCard.innerHTML = `<p>${userInput}</p><br><button class="deletes" id="delete-btn${counter}">DELETE</button>`;
    
    
    $(".deletes").on("click", function(e){        
        let cardToDelete = e.target.parentNode;
        $(cardToDelete).remove();
    });

});

