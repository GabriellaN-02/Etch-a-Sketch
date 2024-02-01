const gridContainer = document.querySelector("#gridContainer");

// Object.assign(column.style, { border: "1px solid black", backgroundColor: "yellow", gridTemplateColumns: "16", gridTemplateRows: "16" });
// gridContainer.appendChild(column);

gridContainer.style.gridTemplateColumns = 16;
gridContainer.style.gridTemplateRows = 16;

for (let row = 1; row <= 16; row++) {
  for (let col = 1; col <= 16; col++) {
    const column = document.createElement("div");
    Object.assign(column.style, { border: "1px solid black", backgroundColor: "yellow", gridColumn: `${col} / span 1`, gridRow: `${row} / span 1` });
    gridContainer.appendChild(column);
  }
}
