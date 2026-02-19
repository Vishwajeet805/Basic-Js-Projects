const playerdisplay = document.getElementById("playerDisplay");
const botdisplay = document.getElementById("botDisplay");
const pdisplay = document.getElementById("resultDisplay");
const choices = [`Rock`, `Paper`, `Scissors`];
const pscoredsi=document.getElementById("pscore");
const bscoredsi=document.getElementById("bscore");
let pscore=0;
let bscore=0;
function playgame(playerChoice) {
    const botChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerChoice === botChoice) {
        result = "Its A Tie";
    }
    else {
        switch (playerChoice) {
            case `Rock`:
                result = (botChoice == `Scissors`) ? "You Win! 🥳" : "You Lose! 🤡";
                break;
            case `Paper`:
                result = (botChoice == `Rock`) ? "You Win! 🥳" : "You Lose! 🤡";
                break;
            case `Scissors`:
                result = (botChoice == `Paper`) ? "You Win! 🥳" : "You Lose! 🤡";
                break;
        }
        playerdisplay.textContent = `Player: ${playerChoice}`;
        botdisplay.textContent = `Bot: ${botChoice}`;
        pdisplay.textContent = ` ${result}`;
        pdisplay.classList.remove("greentext", "redtext");
        switch (result) {
            case "You Win! 🥳":
                pdisplay.classList.add("greentext");
                pscore++;
                pscoredsi.textContent=`${pscore}`
                break;
            case "You Lose! 🤡":
                pdisplay.classList.add("redtext");
                bscore++;
                bscoredsi.textContent=`${bscore}`
                break;
            default:
                pdisplay.classList.add("greytext");
        }
    }
}