const container = document.getElementById('container');

const numberRows = 25;
const numberBoxes = numberRows * numberRows;

function fillWithDivs(numberRows) {
    for (let i = 0; i < numberBoxes; i++) {
        container.innerHTML += `<div id=${i}></div>`;
    }
}


fillWithDivs(numberRows);
container.style.gridTemplateColumns = `repeat(${numberRows}, auto)`
container.style.gridTemplateRows = `repeat(${numberRows}, auto)`


for (let i = 0; i < numberBoxes; i++ ) {
let target = document.getElementById(`${i}`);
target.addEventListener('mouseenter', e => {
    target.style.background = 'black';})


}
