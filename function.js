const gridContainer = document.getElementById('grid-container');
    const numRows = 50;
    const numCols = 50;

    let emptyArray = [{'l': false, 'r': false, 't': false, 'b': false}*50]*50;

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.textContent = `Tile ${row}-${col}`; // Custom content
            // Add custom styles or data attributes as needed
            // tile.style.backgroundColor = (row % 2 === col % 2) ? 'lightblue' : 'lightcoral';
            gridContainer.appendChild(tile);
        }
    }


