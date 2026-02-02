const btn1=document.getElementsByClassName("button")[0];
const btn2=document.getElementsByClassName("button")[2];
const btn3=document.getElementsByClassName("button")[1];
const dice=document.getElementById("dice");
const dice1=document.getElementById("dice1");
const dice2=document.getElementById("dice2");
const dice3=document.getElementById("dice3");
const dice21=document.getElementById("dice21");
const dice22=document.getElementById("dice22");
const min=1;
const max=6;
let randomNum;
let randomNum1;
let randomNum2;
let randomNum3;
let randomNum21;
let randomNum22;

btn1.onclick=function rollDice(){
    randomNum=Math.floor(Math.random() * (max - min )) + min;
    dice.textContent=randomNum;
}
btn2.onclick=function rollDice(){
    randomNum1=Math.floor(Math.random() * (max - min )) + min;
    randomNum2=Math.floor(Math.random() * (max - min )) + min;
    randomNum3=Math.floor(Math.random() * (max - min )) + min;
    dice1.textContent=randomNum1;
    dice2.textContent=randomNum2;
    dice3.textContent=randomNum3;
}
btn3.onclick=function rollDice(){
    randomNum21=Math.floor(Math.random() * (max - min )) + min;
    randomNum22=Math.floor(Math.random() * (max - min )) + min;  
    dice21.textContent=randomNum21;
    dice22.textContent=randomNum22;
}