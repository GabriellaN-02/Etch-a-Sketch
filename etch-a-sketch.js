const gridContainer = document.querySelector("#gridContainer");

const gridTitle = document.querySelector("#gridTitle"); //h3
let gridNumber = document.createElement("span"); // new element to store the value of the range
const gridRange = document.querySelector("#gridRange"); // references to the input range

// gridNumber.textContent = gridRange.value;
// gridTitle.appendChild(gridNumber);

// default 8x8 rows
for (let row = 1; row <= 8; row++) {
  for (let col = 1; col <= 8; col++) {
    const column = document.createElement("div");
    Object.assign(column.style, { border: "1px solid black", backgroundColor: "yellow", gridColumn: `${col} / span 1`, gridRow: `${row} / span 1` });
    gridContainer.appendChild(column);
  }
}

gridRange.addEventListener("input", () => {
  gridNumber.textContent = gridRange.value;
  gridTitle.appendChild(gridNumber);
});
