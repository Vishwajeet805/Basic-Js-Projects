const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let guess;
let attempts = 0;
let running = true;
while (running) {
    guess = window.prompt(`Enter a guess between ${min} and ${max}: `);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert(`Please enter a valid number`);
    } else if (guess < min || guess > max) {
        window.alert(`Please enter a valid number`);
    } else {
        attempts++;
        if (guess > answer) {
            window.alert(`Too high! Try again.`);

        } else if (guess < answer) {
            window.alert(`Too low! Try again.`);

        } else {
            window.alert(`Congratulations! You guessed the number ${answer} in ${attempts} attempts.`);
            running = false;
        }   
    }
}

