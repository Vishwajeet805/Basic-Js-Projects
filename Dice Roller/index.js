function rollDice() {
    const numDices = document.getElementById("numDices").value;
    const result = document.getElementById("result");
    const resultImages = document.getElementById("resultimages");
    const values = [];
    const images = [];
    for (let i = 0; i < numDices; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        values.push(roll);
        images.push(`<img src="images/${roll}.png" alt="Dice ${roll}">`);
}
result.innerHTML = `You rolled: ${values.join(", ")}`;
resultImages.innerHTML = images.join(" ");
}