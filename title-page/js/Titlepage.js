// JavaScript for the START button functionality with sound

document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("startBtn");
  const clickSound = document.getElementById("click-sound");

  startBtn.addEventListener("click", function () {
    // Play click sound
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play();
    }

    // Slight delay so the sound plays before redirect
    setTimeout(function () {
      window.location.href = "index.html";
    }, 200); // adjust this if you want a longer/shorter pause
  });
});