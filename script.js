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
  currentNumber = parseInt(startNumberInput.value);
  inSpan.textContent = currentNumber;
  countdown = setInterval(() => {
    if (!isPaused) {
      if (currentNumber <= 0) {
        clearInterval(countdown);
        finalMessage.style.display = "block";
        startButton.disabled = false; // Enable the start button when the countdown is finished
      } else {
        currentNumber--;
        inSpan.textContent = currentNumber;
        inSpan.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 1000,
          fill: "forwards",
        });
      }
    }
  }, 1000);
  startButton.disabled = true; // Disable the start button after the first click
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
