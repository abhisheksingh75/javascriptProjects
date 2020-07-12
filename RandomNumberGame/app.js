let min = 1,
  max = 10,
  winningNumber = getRandomNum(min, max)
guessLeft = 3

// ui Elements
const game = document.querySelector(".game")
const minNum = document.querySelector(".min-num")
const maxNum = document.querySelector(".max-num")
const guessBtn = document.querySelector("#guess-btn")
const guessInput = document.querySelector("#guess-input")
const message = document.querySelector(".message")

// Assign Ui to min and max
minNum.textContent = min
maxNum.textContent = max

// play again event listener
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload()
  }
})

guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value)
  //   validate
  if (isNaN(guess) || guess < min || guess > max) {
    guessInput.style.borderColor = "red"
    setMessage(`Please enter a number between ${min} and ${max}`, "red")
  }

  if (guess === winningNumber) {
    Gameovor(true, `${winningNumber} is correct, YOU WIN!`)
    playAgain()
  } else {
    guessLeft -= 1
    if (guessLeft === 0) {
      Gameovor(
        false,
        `Game over, YOU LOST!. The correct number is ${winningNumber}`
      )
      playAgain()
    } else {
      // change border color
      guessInput.style.borderColor = "red"
      //   clear input
      guessInput.value = ""
      // game continues -anwser wrong
      setMessage(`Guess is not correct, ${guessLeft} guesses left`, "red")
    }
  }
})

function Gameovor(isWon, msg) {
  //game over - lost
  //   disable Input
  guessInput.disabled = true
  //   clear input
  guessInput.value = ""
  // change border color
  guessInput.style.borderColor = isWon ? "green" : "red"
  // let user know he won
  setMessage(msg, isWon ? "green" : "red")
}

function playAgain() {
  guessBtn.value = "Play Again"
  guessBtn.className = "play-again"
}

function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
