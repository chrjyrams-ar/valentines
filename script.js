const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

function moveButton() {
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 40 - 20;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function yesClicked() {
  document.getElementById("message").style.display = "block";
  if (music) music.play();
}