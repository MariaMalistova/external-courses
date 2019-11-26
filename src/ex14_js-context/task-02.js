function Hangman(word) {
    this.word = word;
    this.guessedString = "";
    this.errorsLeft = 6;
    this.wrongSymbols = [];
    for (let i = 0; i < this.word.length; i++) {
        this.guessedString += "_";
    }
    this.guess = function(letter) {
      let returnedAnswer;
      if (this.errorsLeft === 0){
        returnedAnswer = "No errors left. You lose!"
      } else {
          if (this.wrongSymbols.indexOf(letter) === -1) {
            if (this.word.indexOf(letter) !== -1) {
            for (let i = 0; i < this.word.length; i++) {
                if (this.word[i] === letter) {
                  let guessedLetters = this.guessedString.split("");
                  guessedLetters[i] = letter;
                  this.guessedString = guessedLetters.join("");
                }
              }
              if (this.guessedString.indexOf("_") === -1) {
                returnedAnswer = this.guessedString + " | You won!";
              } else {
                  returnedAnswer = this.guessedString;
              }
            } else {
                this.wrongSymbols.push(letter);
                this.errorsLeft--;
                returnedAnswer = "wrong letter, errors left " + this.errorsLeft + " | ";
                for (let i = 0; i < this.wrongSymbols.length; i++) {
                  returnedAnswer += this.wrongSymbols[i];
                  if (i !== this.wrongSymbols.length - 1) {
                    returnedAnswer += ",";
                    }
                }
                if (this.errorsLeft === 0) {
                  returnedAnswer += " You lose!"
                }   
            }        
          } else {
              returnedAnswer = "You've already tried this symbol | ";
              for (let i = 0; i < this.wrongSymbols.length; i++) {
                returnedAnswer += this.wrongSymbols[i];
                if (i !== this.wrongSymbols.length - 1) {
                  returnedAnswer += ",";
                }
              }
            }  
      }
      console.log(returnedAnswer);
      return this;
    }
    this.getGuessedString = function() {
      return this.guessedString;
    }
    this.getErrorsLeft = function() {
      return this.errorsLeft;
    }
    this.getWrongSymbols = function() {
      return this.wrongSymbols;
    }
    this.getStatus = function() {
      return this.guessedString + " | errors left " + this.errorsLeft; 
    }
    this.startAgain = function(newWord) {
      this.word = newWord;
      this.errorsLeft = 6;
      this.wrongSymbols = [];
      this.guessedString = "";
      for (let i = 0; i < this.word.length; i++) {
          this.guessedString += "_";
      }      
      return this;
    }
}
const hangman = new Hangman("");
module.exports = hangman;