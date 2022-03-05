// // Import the suggestions and colours 
import { suggestions, colours } from "./data.js"

// // Declare variables used for querying the DOM
let title = document.querySelector(".title");
let info = document.querySelector(".info");
let activity = document.querySelector(".active");
let boxShadow = document.querySelector(".box")

// // Retrieves a random integer between 0 and an integer given as an argument 
export function getRandomInteger(max) {
    const integer = Math.floor(Math.random() * (max));
    return integer;
}

// // Retrieves a random suggestion from our array using getRandomInteger, then renders the data to display in the appropriate tags  
export function getSuggestion() {
    const max = suggestions.length;
    const result = getRandomInteger(max);
    title.innerText = suggestions[result]["title"];
    info.innerText = suggestions[result]["info"];
}

// // Retrieves a random colour from our array using getRandomInteger, then assigns said colour to the activity text and box shadow   
export function setColour() {
    const randomInteger = getRandomInteger(colours.length);
    const colour = colours[randomInteger];
    activity.style.color = colour;
    boxShadow.style.boxShadow = "0px 0px 25px 0px " + colour;
    boxShadow.style.webkitBoxShadow = "0px 0px 25px 0px " + colour;
    boxShadow.style.mozBoxShadow = "0px 0px 25px 0px " + colour;
}

// // Invoke functions 
getSuggestion();
setColour();
