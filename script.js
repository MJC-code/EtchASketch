const container = document.getElementById('container');
const newGridButton = document.getElementById('newGridButton')
newGridButton.addEventListener('click', newGrid);


function newGrid() {
    let numberRows = prompt("How many squares per side in the new grid? (from 2 to 100)")
    if (numberRows == null)  return;
    if (numberRows < 2) numberRows = 2;
    if (numberRows > 100) numberRows = 100;
    container.innerHTML = '';
    drawGrid(numberRows);
}


function drawGrid(size) {
    const numberRows = size;
    const numberBoxes = numberRows * numberRows;
    
    fillWithDivs(numberBoxes);
    container.style.gridTemplateColumns = `repeat(${numberRows}, auto)`
    container.style.gridTemplateRows = `repeat(${numberRows}, auto)`

    for (let i = 0; i < numberBoxes; i++) {
        let target = document.getElementById(`${i}`);
        target.addEventListener('mouseenter', e => {
            target.style.background = 'black';
        })
    }
}

function fillWithDivs(numberBoxes) {
    for (let i = 0; i < numberBoxes; i++) {
        let child = document.createElement('div')
        child.classList.add('cell');
        child.id = (i)
        container.appendChild(child);
    }
}

drawGrid(16)