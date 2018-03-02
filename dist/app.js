(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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


},{}]},{},[1]);
