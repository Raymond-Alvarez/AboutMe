'use strict';

// Feature Task: Personalized Greeting
let visitorName = prompt("Before we begin, what is your name?");
alert("Welcome to my site, " + visitorName + "! Let's see if you can pass the 'About Me' quiz.");

// Feature Task: 5 Yes/No Questions
// I'll show Question 1; you'll repeat the pattern for Q2-Q5
let questionOne = prompt("Was I born in California? (Yes/No or Y/N)").toLowerCase();

if (questionOne === 'yes' || questionOne === 'y') {
    // console.log("The user guessed correctly for Question 1.");
    alert("Correct! I'm a California native.");
} else {
    // console.log("The user guessed incorrectly for Question 1.");
    alert("Actually, I was! Sunny California is my birthplace.");
}

// ... Repeat for Questions 2, 3, 4, and 5 ...

// Feature Task: Final Message with Name
alert("Thanks for playing, " + visitorName + ". I hope you enjoy learning more about me on this page!");