const container = document.getElementById('container');
const newGridButton = document.getElementById('newGridButton')
newGridButton.addEventListener('click', newGrid);
const colourButton = document.getElementById('setColourStyle')
colourButton.addEventListener('click', changeColourStyle)
let colourStyle = 'black';

function newGrid() {
    let numberRows = prompt("How many squares per side in the new grid? (from 2 to 100)")
    if (numberRows == null) return;
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
        target.addEventListener('mouseenter', () => {
            // target.style.background = 'black';
            setBackgroundColour(target)
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

function setBackgroundColour(target) {
    if (colourStyle === 'black') {
         target.style.background = 'black';
    return;
    } else if (colourStyle === 'multi') {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        target.style.background = "#" + randomColor;
        return;
    }
}

function changeColourStyle() {
    if (colourStyle === 'black') {
        colourStyle = 'shade'
        colourButton.textContent = 'Colour mode: shading';
    } else if (colourStyle === 'shade') {
        colourStyle = 'multi'
        colourButton.textContent = 'Colour mode: multicolour';
    } else if (colourStyle === 'multi') {
        colourStyle = 'black'
        colourButton.textContent = 'Colour mode: black';
    } 
    console.log(`Colour mode changed to ${colourStyle}`)
}


drawGrid(16)