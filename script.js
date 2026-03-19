let dimension = 16;

const body = document.querySelector("body");
const newGridButton = document.createElement("button");
const container = document.querySelector(".grid-container");
body.insertBefore(newGridButton, container);
newGridButton.textContent = "Click here to make a new grid";
newGridButton.classList.add("new-grid-button");

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
    e.target.classList.add("hover");
  });
});
