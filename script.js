const container = document.getElementById('container');

const numberRows = 7;

container.style.gridTemplateColumns = `repeat(${numberRows}), 1fr)`;
container.style.gridTemplateRows = `repeat(${numberRows}), 1fr)`;


function fillWithDivs(numberRows) {
    for (let i = 0; i < 49; i++) {
        container.innerHTML += `<div></div>`;
    }
}



fillWithDivs(4);

