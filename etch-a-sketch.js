const GRID_WIDTH = 960;
const MAX_RGB_NUMBER = 256;

function generateGrid(numberOfSquares)
{   
    const squareSize = calculateSquareSize(numberOfSquares);

    const gridContainer = document.querySelector(".container")
    
    for (let i = 0; i < (numberOfSquares**2); i++)
    {
        const square = document.createElement("div");
        square.classList.add("square");

        const rgbColors = randomizeRGB();

        square.setAttribute("style", `height: ${squareSize}px; width: ${squareSize}px; background-color: rgb(${rgbColors[0]}, ${rgbColors[1]}, ${rgbColors[2]});`);
        gridContainer.appendChild(square);
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

generateGrid(16);
