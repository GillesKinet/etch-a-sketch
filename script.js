const containerDimensions = 16 * 16;

const container = document.getElementById("grid-container");

for (let i = 0; i < containerDimensions; i++) {
  const gridDiv = document.createElement("div");
  container.appendChild(gridDiv);
}
