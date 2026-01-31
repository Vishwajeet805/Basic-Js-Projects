const decreaseBtn = document.getElementById("Decrease");
const resetBtn = document.getElementById("Reset");
const increaseBtn = document.getElementById("Increase");
const countLabel = document.getElementById("countLabel");
let count = 0;
increaseBtn.onclick = function(){

    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){

    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){

    count=0;
    countLabel.textContent = count;
}   