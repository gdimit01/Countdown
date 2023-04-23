const startNumberInput = document.getElementById("startNumber");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const replayButton = document.getElementById("replay");
const inSpan = document.querySelector(".in");
const finalMessage = document.querySelector(".final");

let countdown;
let currentNumber;
let isPaused = false;

function startCountdown() {
  const timeWarning = document.getElementById("timeWarning"); // Get the warning message element

  currentNumber = parseInt(startNumberInput.value);
  inSpan.textContent = currentNumber;
  countdown = setInterval(() => {
    if (!isPaused) {
      if (currentNumber <= 0) {
        clearInterval(countdown);
        finalMessage.style.display = "block";
        startButton.disabled = false;
      } else {
        currentNumber--;
        inSpan.textContent = currentNumber;
        inSpan.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 1000,
          fill: "forwards",
        });

        // Show or hide the warning message based on the countdown value
        if (currentNumber === 30) {
          timeWarning.style.display = "block";
        } else if (currentNumber === 29) {
          timeWarning.style.display = "none";
        }
      }
    }
  }, 1000);
  startButton.disabled = true;
}


function pauseCountdown() {
  isPaused = !isPaused;
  pauseButton.textContent = isPaused ? "Resume" : "Pause";
}

function resetCountdown() {
  clearInterval(countdown);
  isPaused = false;
  pauseButton.textContent = "Pause";
  startButton.disabled = false; // Enable the start button when the countdown is reset
  startCountdown();
}

startButton.addEventListener("click", startCountdown);
pauseButton.addEventListener("click", pauseCountdown);
replayButton.addEventListener("click", resetCountdown);
