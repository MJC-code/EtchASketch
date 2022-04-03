const container = document.getElementById('container');
const newGridButton = document.getElementById('newGridButton')
newGridButton.addEventListener('click', newGrid);


function fillWithDivs(numberBoxes) {
    for (let i = 0; i < numberBoxes; i++) {
        container.innerHTML += `<div class='cell' id=${i}></div>`;
    }
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


function newGrid() {
   while (container.firstChild) container.removeChild (container.firstChild);
   
    drawGrid(4);
}

drawGrid(16)