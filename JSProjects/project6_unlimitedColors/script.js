function randomColor() {
  const hex = "0123456789ABCDEF";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}

let interValId;
function startChanging() {
  if (!interValId) {
    interValId = setInterval(bgChange, 1000);
  }
  function bgChange() {
    document.body.style.backgroundColor = randomColor();
  }
}

function stoptChanging() {
  clearInterval(interValId);
  interValId = null;
}
document.querySelector("#start").addEventListener("click", startChanging);
document.querySelector("#stop").addEventListener("click", stoptChanging);
