const containerEl = document.querySelector(".container");

for (let index = 0; index < 28; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

randomColor();

const colorContainerEls = document.querySelectorAll(".color-container");
generateColors();

function generateColors() {
  colorContainerEls.forEach((colorContainerEls) => {
    const newColorCode = randomColor();
    // console.log(newColorCode);
    colorContainerEls.style.backgroundColor = "#" + newColorCode;
    colorContainerEls.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";

  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
    // console.log(colorCode)
  }
  return colorCode;
}
