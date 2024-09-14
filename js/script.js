const divContainer = document.querySelector(".container");

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Grid";
resetBtn.style.marginBottom = "5px";
resetBtn.style.padding = "4px 12px"
resetBtn.addEventListener("click", () => {
    while(divContainer.firstChild) {
        divContainer.removeChild(divContainer.lastChild);
    }
    numOfGrids = prompt("How many grids do you want?");
    if(numOfGrids>100 || numOfGrids<0) {
        numOfGrids = prompt("Please enter a value from 1-100 only.");
    }
    createGrid(numOfGrids);
});
document.body.insertBefore(resetBtn, divContainer);

const createGrid = (amtOfGrids) => {
    const widthAndHeight = 960 / amtOfGrids;
    for(let i=1; i<=amtOfGrids; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");
    
        for(let i=1; i<=amtOfGrids; i++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            gridBox.style.height = `${widthAndHeight}px`;
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = "black";
            })
            row.appendChild(gridBox);
        }
        divContainer.appendChild(row);
    }
}

createGrid(numOfGrids = 16);
