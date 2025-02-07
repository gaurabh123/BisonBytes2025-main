document.addEventListener("DOMContentLoaded", function () {
  const applyButton = document.getElementById("applyButton");
  const confettiContainer = document.getElementById("confettiContainer");
  const buddyMascot = document.getElementById("buddyMascot");
  const buddyImage = document.getElementById("buddyImage");

  let hoverConfettiInterval;

  // 🎉 Function to Create Confetti with Different Shapes
  function launchConfetti(bigBurst = false) {
    const confettiShapes = ["square", "circle", "triangle"];
    for (let i = 0; i < (bigBurst ? 100 : 15); i++) {
      let confetti = document.createElement("div");
      confetti.className = `confetti ${
        confettiShapes[Math.floor(Math.random() * confettiShapes.length)]
      }`;
      confetti.style.left = `${Math.random() * window.innerWidth}px`;
      confetti.style.top = `-10px`;
      confetti.style.backgroundColor = [
        "#ffcc00",
        "#ff66b2",
        "#66ff66",
        "#66ccff",
      ][Math.floor(Math.random() * 4)];
      confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;

      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  }

  // 🚀 Button Hover Effect - Small Confetti
  applyButton.addEventListener("mouseenter", function () {
    hoverConfettiInterval = setInterval(() => launchConfetti(false), 300);
  });

  applyButton.addEventListener("mouseleave", function () {
    clearInterval(hoverConfettiInterval);
  });

  // 🎊 Click Effect - Show Buddy the Bison in Center, Then Confetti
  applyButton.addEventListener("click", function () {
    confettiContainer.classList.remove("hidden");
    buddyMascot.classList.remove("opacity-0");

    setTimeout(() => {
      buddyMascot.classList.add("opacity-0");
      setTimeout(() => {
        confettiContainer.classList.add("hidden");
        launchConfetti(true); // Big confetti burst
        window.open("https://apply.bisonbytes.com", "_blank");
      }, 500);
    }, 2000);
  });

  // 🎊 Clicking on Buddy Image Triggers Confetti
  buddyImage.addEventListener("click", function () {
    launchConfetti(true);
  });
});
