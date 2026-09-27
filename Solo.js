import * as readline from 'node:process';
import { stdin as input, stdout as output } from 'node:process';
import readlinePromises from 'node:readline/promises';
const rl = readlinePromises.createInterface({ input, output });

console.log("You're Playing Hangman:")
const words = ["Apple", "Smart", "Plain", "Boring", "Grass", "Forest", "Eye", "Block", "Scratch", "Danger", "Loser", "Paint", "Orange", "Flicker", "Chocolate", "Pick", "Brain", "Flea", "Praying", "Drop", "Falling", "Tears", "Book", "Store", "House", "Sneakers", "Damaged", "Zebra", "Forest", "Candle",]
console.log("   _____\n   |    \\\n   |\n   |\n___|___\n")

const got = []
const get = []

let word = got.join("");
let wrong = got.join(" ")

let got_guess = false
async function testGuess() {
    let randomIndex = Math.floor(Math.random() * words.length);
    let secretWord = words[randomIndex];
    for (let i = 0; i < secretWord.length; i++) {
        got.push("_");
    }
    word = got.join("");
    while (secretWord.toLowerCase() != word.toLowerCase()){
        const guess = await rl.question("Guess a letter: ");
        let foundMatch = false

        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i].toLowerCase() === guess.toLowerCase()) {
                got[i]=guess
                foundMatch = true
            }
        }
        if (foundMatch == false){
            get.push(guess);
        }
        word = got.join("");
        wrong = get.join(" ");

        console.log(word)
        console.log(`Wrong guesses: ${wrong}`);
    }

    console.log(`(The secret word was: ${secretWord})`); // just for testing, remove later

    rl.close();
}
testGuess();