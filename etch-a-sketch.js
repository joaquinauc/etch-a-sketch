function generateGrid(numberOfSquares)
{   
    const gridContainer = document.querySelector(".conatiner")

    for (let i = 0; i < (numberOfSquares**2); i++)
    {
        const square = document.createElement("div");
        square.classList.add("square");
        gridContainer.appendChild(square);
    }
}
