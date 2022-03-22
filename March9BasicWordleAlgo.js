// Wordle algo

// begining with a 5 letter word that is the answer:
let word = "crazy";

let arrayOfGuessedWords = [];

// and a user guess of a 5 letter word ( ok to assume the input an actual word is all lowercase and contains exactly 5 letters):
guess1 = "grail";
guess2 = "track";
guess3 = "cramp";
guess4 = "crabs";
guess5 = "craze";
guess6 = "crazy";

function compareGuess(word, guess) {
  let compare = [];

  // compare each letter in the guess to determine if:
  // it exists and is in the correct spot (if so compare at index = "yes, ")
  for (let i = 0; i <= 5; i++) {
    if (word[i] == guess[i]) {
      compare.push("yes");
    }
    // else if it exists and is not in the correct spot (compare at index = "exists, ")
    else if(word[i] != guess[i])

    
      for (let j = 0; j <= 5; j++) {
        if (guess[i] == word[j]) {
          compare.push("exists");
        }
      }
      compare.push("no");
    }
}
compare;

  // else if it doesn't exist in the word (compare at index ="no, ")

  //return the compare array
}

console.log(compareGuess(word, guess1));
// expected [no, yes, yes, no, no]
console.log(compareGuess(word, guess2));
// expected [no, yes, yes, exists, no]
console.log(compareGuess(word, guess3));
// expected [yes, yes, yes, no, no]
console.log(compareGuess(word, guess4));
// expected [yes, yes, yes, no, no]
console.log(compareGuess(word, guess5));
// expected [yes, yes, yes, yes, no]
console.log(compareGuess(word, guess6));
// expected [yes, yes, yes, yes, yes]

// bonus:
// return "you win!" if the word is correct
// create turns and allow a maximum of 6 guesses before returning "you lose"