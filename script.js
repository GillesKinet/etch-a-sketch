let gridDimension = 16;
let opacity = 0.1;

const body = document.querySelector("body");
const newGridButton = document.createElement("button");
const container = document.querySelector(".grid-container");
body.insertBefore(newGridButton, container);
newGridButton.textContent = "Click here to make a new grid";
newGridButton.classList.add("new-grid-button");

function createGrid(dimension = gridDimension) {
  for (let i = 0; i < dimension; i++) {
    const gridRow = document.createElement("div");
    container.appendChild(gridRow);
    gridRow.classList.add("grid-row");
    for (let i = 0; i < dimension; i++) {
      const gridItem = document.createElement("div");
      gridRow.appendChild(gridItem);
      gridItem.classList.add("grid-item");
    }
  }
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = randomBackgroundColor();
      e.target.style.opacity = opacity;
      opacity += 0.1;
    });
  });
}

createGrid();

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

newGridButton.addEventListener("click", () => {
  const promptText =
    "How many squares do you want in your new grid? Max 100, min 1, use a number please";
  gridDimension = prompt(promptText);
  gridDimension = parseInt(gridDimension);
  while (
    gridDimension > 100 ||
    gridDimension <= 0 ||
    isNaN(gridDimension) ||
    gridDimension === ""
  ) {
    gridDimension = prompt(promptText);
  }
  removeAllChildNodes(container);
  createGrid(gridDimension);
  opacity = 0.1;
});

function randomBackgroundColor() {
  // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}
