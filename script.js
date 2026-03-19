const dimension = 16;
const container = document.querySelector(".grid-container");

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
    e.target.style.background = "blue";
  });
});
