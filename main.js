import { suggestions, colours } from "./data.js"

let title = document.querySelector(".title");
let info = document.querySelector(".info");
let activity = document.querySelector(".activity");
let boxShadow = document.querySelector(".box")

function getRandomInteger(max) {
    const integer = Math.floor(Math.random() * (max));
    return integer;
}

function getSuggeston() {
    const max = suggestions.length;
    const result = getRandomInteger(max);
    title.innerHTML = suggestions[result]["Title"];
    info.innerHTML = suggestions[result]["Info"];
}

function setColour() {
    const randomInteger = getRandomInteger(colours.length);
    const colour = colours[randomInteger];
    activity.style.color = colour;
    boxShadow.style.boxShadow = "0px 0px 25px 0px " + colour;
    boxShadow.style.webkitBoxShadow = "0px 0px 25px 0px " + colour;
    boxShadow.style.mozBoxShadow = "0px 0px 25px 0px " + colour;
}

getSuggeston();
setColour();