import { suggestions } from "./data.js"

let title = document.querySelector(".title");
let info = document.querySelector(".info");


function getRandomSuggeston() {
    let max = suggestions.length;
    console.log(max);
    let result = Math.floor(Math.random() * (max));
    console.log(result)
    title.innerHTML = suggestions[result]["Title"];
    info.innerHTML = suggestions[result]["Info"];
}

getRandomSuggeston();
