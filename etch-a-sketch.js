const gridContainer = document.querySelector("#gridContainer");

const gridTitle = document.querySelector("#gridTitle"); //h3
let gridNumber = document.createElement("span"); // new element to store the value of the range
const gridRange = document.querySelector("#gridRange"); // references to the input range

// event listener for appending the dynamic input value to H3 tag
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
