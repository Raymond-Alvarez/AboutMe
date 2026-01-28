'use strict';

// 1. Personalized Greeting
let visitorName = prompt("Before we begin, what is your name?");
alert("Welcome to my site, " + visitorName + "! Let's see if you can guess how I think.");

// 2. Question 1: Efficiency & Logistics
let questionOne = prompt("In my experience, do I think the quickest fix is usually the right one? (Yes/No)").toLowerCase();

if (questionOne === 'no' || questionOne === 'n') {
    // console.log("User understands that quality takes a process. Correct.");
    alert("Correct! I've learned that doing it right the first time saves you from doing it twice later.");
} else {
    // console.log("User thinks I'm all about speed. Incorrect.");
    alert("Actually, I'm a fan of 'smooth is fast.' Rushing usually just leads to more bugs to fix later!");
}

// 3. Question 2: Lifelong Learning
let questionTwo = prompt("Do I think it's possible to be 'done' learning in the world of technology? (Yes/No)").toLowerCase();

if (questionTwo === 'no' || questionTwo === 'n') {
    // console.log("User understands the growth mindset. Correct.");
    alert("You nailed it. In tech and life, if you aren't growing, you're standing still.");
} else {
    // console.log("User thinks there is a finish line. Incorrect.");
    alert("I wish! But the best part of this 'coding adventure' is that there's always a new puzzle to solve.");
}

// 4. Question 3: Simplicity
let questionThree = prompt("Do I prefer a simple solution over a complex one, even if the complex one looks more impressive? (Yes/No)").toLowerCase();

if (questionThree === 'yes' || questionThree === 'y') {
    // console.log("User values practical results. Correct.");
    alert("Exactly. As my bio says, I'm a fan of 'straightforward results' over 'unnecessary fluff.'");
} else {
    // console.log("User thinks I like fancy things. Incorrect.");
    alert("Actually, I believe the best engineering is the kind that makes a hard task look easy.");
}

// 5. Question 4: Communication
let questionFour = prompt("Is clear communication just as important to me as writing the code itself? (Yes/No)").toLowerCase();

if (questionFour === 'yes' || questionFour === 'y') {
    // console.log("User recognizes my background in instruction. Correct.");
    alert("Spot on. Code is for computers, but software is for people. Communication is key.");
} else {
    // console.log("User thinks I'm a lone wolf. Incorrect.");
    alert("I actually think communication is a superpower in development. It's how great teams build great things.");
}

// 6. Question 5: Persistence
let questionFive = prompt("Am I the type of person to give up on a problem if the answer isn't on the first page of Google? (Yes/No)").toLowerCase();

if (questionFive === 'no' || questionFive === 'n') {
    // console.log("User knows I have grit. Correct.");
    alert("Correct! Stick with a problem until it's solved.");
} else {
    // console.log("User underestimated my stubbornness. Incorrect.");
    alert("Incorrect! Enjoy the 'grind.' I'll dig through documentation all night if that's what it takes.");
}

// 7. Final Message with Name
alert("Thanks for playing, " + visitorName + ". I hope you enjoy learning more about me on this page!");