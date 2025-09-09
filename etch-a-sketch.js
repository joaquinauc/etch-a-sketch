const GRID_WIDTH = 560;
const MAX_RGB_NUMBER = 256;

function generateGrid(numberOfSquares)
{   
    const squareSize = calculateSquareSize(numberOfSquares);

    for (let i = 0; i < (numberOfSquares**2); i++)
    {
        const square = document.createElement("div");
        square.classList.add("square");

        square.setAttribute("style", `height: ${squareSize}px; width: ${squareSize}px; opacity: 0`);
        gridContainer.appendChild(square);

        let opacity = 0;

        square.addEventListener("mouseover", () => {
            opacity = darkenSquare(opacity);
            const rgbColors = randomizeRGB();
            square.setAttribute("style", `height: ${squareSize}px; width: ${squareSize}px; 
                background-color: rgb(${rgbColors[0]}, ${rgbColors[1]}, ${rgbColors[2]}); 
                opacity: ${opacity}`);
        });
    }
}

function calculateSquareSize(numberOfSquares)
{
    return Math.floor(GRID_WIDTH / numberOfSquares);
}

function randomizeRGB()
{
    const red = randomRGBNumber();
    const green = randomRGBNumber();
    const blue = randomRGBNumber();

    return [red, green, blue];
}

function randomRGBNumber()
{
    return Math.floor(Math.random() * MAX_RGB_NUMBER);
}

function darkenSquare(opacity)
{
    return opacity + 0.1;
}

const gridContainer = document.querySelector(".container")

const buttonReference = document.querySelector("button");
buttonReference.addEventListener("click", () => {
    while (gridContainer.firstChild)
    {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    
    let gridSize = prompt("The grid size is n x n, enter n (Default = 16): ");
    if (gridSize > 100)
    {
        gridSize = 100;
        alert("Grid size is maxed to 100")
    }
    if (!gridSize) gridSize = 16;
    generateGrid(Math.floor(Number(gridSize)));
});

generateGrid(16);
