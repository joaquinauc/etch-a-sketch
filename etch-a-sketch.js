const GRID_WIDTH = 960;

function generateGrid(numberOfSquares)
{   
    const squareSize = calculateSquareSize(numberOfSquares);

    const gridContainer = document.querySelector(".container")
    
    for (let i = 0; i < (numberOfSquares**2); i++)
    {
        const square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", `height: ${squareSize}px; width: ${squareSize}px;`);
        gridContainer.appendChild(square);
    }
}

function calculateSquareSize(numberOfSquares)
{
    return Math.floor(GRID_WIDTH / numberOfSquares);
}

generateGrid(16);