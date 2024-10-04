// random number guessing game 

function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10
    let guess;

    do {
        guess = prompt('Enter your guess (1 to 10):');
        if (guess === null) {
            alert("Game cancelled.");
            return; // Exit if the user cancels
        }
        guess = Number(guess); // Convert the guess to a number

        if (guess === randomNumber) {
            alert("Congratulations, you won!");
        } else {
            alert("Try again!");
        }
    } while (guess !== randomNumber);
}

guessNumber();

// basic do while loop 

let i = 0;
do {
      console.log(i);
    i++;
} while (i < 5);

// Input Validation 

function validatePassword() {
    let password;
    do {
        // password=prompt("please enter your password will be in 6 digits");

        if (password.length >= 6) {
            alert("password is valid ")
            break;
        } else {
            alert("password is too short ")

        }

    } while (password.length <= 6);
}
validatePassword()