const container = document.getElementById('container');

const numberRows = 4;

function fillWithDivs(numberRows) {
    for (let i = 0; i < numberRows*numberRows; i++) {
        container.innerHTML += `<div id=${i}></div>`;
    }
}


fillWithDivs(numberRows);
container.style.gridTemplateColumns = `repeat(${numberRows}, auto)`
container.style.gridTemplateRows = `repeat(${numberRows}, auto)`

const target = document.getElementById('1');

target.addEventListener('mouseenter', e => {
    target.style.background = 'black';})