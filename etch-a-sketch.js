const gridContainer = document.querySelector("#gridContainer");

const gridTitle = document.querySelector("#gridTitle"); //h3
let gridNumber = document.createElement("span"); // new element to store the value of the range
const gridRange = document.querySelector("#gridRange"); // references to the input range

//default 8 value of grid size in range
gridNumber.textContent = gridRange.value;
gridTitle.appendChild(gridNumber);

//default 8*8 grids
for (let row = 1; row <= 8; row++) {
  for (let col = 1; col <= 8; col++) {
    const column = document.createElement("div");
    Object.assign(column.style, { border: "1px solid black", backgroundColor: "yellow", gridColumn: `${col} / span 1`, gridRow: `${row} / span 1` });
    gridContainer.appendChild(column);
  }
}

// Event listener: 1. Dynamic range value 2. Dynamic grid items
gridRange.addEventListener("input", () => {
  gridNumber.textContent = gridRange.value;
  gridTitle.appendChild(gridNumber);

  gridContainer.textContent = "";
  // creating dynamic grids
  for (let row = 1; row <= gridRange.value; row++) {
    for (let col = 1; col <= gridRange.value; col++) {
      const column = document.createElement("div");
      Object.assign(column.style, { border: "1px solid black", backgroundColor: "yellow", gridColumn: `${col} / span 1`, gridRow: `${row} / span 1` });
      gridContainer.appendChild(column);
    }
  }
});
