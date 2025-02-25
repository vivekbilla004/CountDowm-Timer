// Set the target date for the countdown
const targetDate = new Date("2025-12-31 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft < 0) {
    document.getElementById("CountDown").innerHTML = "Countdown Expired!";
    document.getElementById("progressBar").style.width = "100%";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

  const totalDuration = targetDate - new Date("2025-01-01 00:00:00").getTime();
  const elapsed = totalDuration - timeLeft;
  const progressPercentage = (elapsed / totalDuration) * 100;

  document.getElementById("progressBar").style.width = `${progressPercentage}%`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
