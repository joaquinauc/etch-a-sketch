const GRID_WIDTH = 960;

function generateGrid(numberOfSquares)
{   
    squareSize = calculateSquareSize(numberOfSquares);

    const gridContainer = document.querySelector(".conatiner")

    for (let i = 0; i < (numberOfSquares**2); i++)
    {
        const square = document.createElement("div");
        square.classList.add("square");
        gridContainer.appendChild(square);
    }
}

function calculateSquareSize(numberOfSquares)
{
    return Math.floor(GRID_WIDTH / numberOfSquares);
}