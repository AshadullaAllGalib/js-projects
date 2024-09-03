const miniMum = 1;
const maxiMum = 100;
const answer = Math.floor(Math.random() * (maxiMum - miniMum + 1)) + miniMum;

let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt( `Guess a number between ${miniMum} - ${maxiMum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }else if (guess < miniMum || guess > maxiMum){
        window.alert("please enter a valid number");
    }else {
        attempts++;
        if(guess < answer){
            window.alert("Too low try again");
        }else if (guess > answer){
            window.alert("Too high try again");
        }else {
            window.alert(`CORRECT! The answer was ${answer} It took you ${attempts} attempts`)
            running = false;
        }
    }
}