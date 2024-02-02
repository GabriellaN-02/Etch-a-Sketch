const gridContainer = document.querySelector("#gridContainer");

const gridTitle = document.querySelector("#gridTitle"); //h3
let gridNumber = document.createElement("span"); // new element to store the value of the range
const gridRange = document.querySelector("#gridRange"); // references to the input range

const color = document.querySelector("#color");
const clickRate = 100;
let isMouseDown = false;

//default 8 value of grid size in range
gridNumber.textContent = `${gridRange.value}x${gridRange.value}`;
gridNumber.style.color = "#121212";
gridTitle.appendChild(gridNumber);

//default 8*8 grids
for (let row = 1; row <= 8; row++) {
  for (let col = 1; col <= 8; col++) {
    let column = document.createElement("div");
    Object.assign(column.style, { border: "1px solid gray", gridColumn: `${col} / span 1`, gridRow: `${row} / span 1` });
    gridContainer.appendChild(column);

    column.addEventListener("mouseenter", handleMouseEnter);
  }
}

function startClick(column) {
  column.style.backgroundColor = color.value;
  column.dataset.isColored = "true";
  clickTimeout = setTimeout(() => startClick(column), 1000 / clickRate);
}

function stopClick() {
  isMouseDown = false;
  clearTimeout(clickTimeout);
}

//for continuous coloring
function handleMouseDown(event) {
  const column = event.target;
  isMouseDown = true;
  if (!column.dataset.isColored) {
    startClick(column);
  }
}
//checks if the mouse is down and the column is not colored, then it starts the continuous coloring
function handleMouseEnter(event) {
  if (isMouseDown) {
    const column = event.target;
    if (!column.dataset.isColored) {
      startClick(column);
    }
  }
}

document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mouseup", stopClick);

// Event listener: 1. Dynamic range value 2. Dynamic grid items
gridRange.addEventListener("input", () => {
  gridNumber.textContent = `${gridRange.value}x${gridRange.value}`;
  gridNumber.style.color = "#121212";
  gridTitle.appendChild(gridNumber);

  gridContainer.textContent = "";
  // creating dynamic grids
  for (let row = 1; row <= gridRange.value; row++) {
    for (let col = 1; col <= gridRange.value; col++) {
      const column = document.createElement("div");
      Object.assign(column.style, { border: "1px solid gray", gridColumn: `${col} / span 1`, gridRow: `${row} / span 1` });
      gridContainer.appendChild(column);

      column.addEventListener("mouseenter", handleMouseEnter);
    }
  }
});
