const container = document.getElementById('container');

const numberRows = 16;

container.style.gridTemplateColumns = `repeat(${numberRows}), 1fr)`;
container.style.gridTemplateRows = `repeat(${numberRows}), 1fr)`;


function fillWithDivs(numberRows) {
    for (let i = 0; i < numberRows*numberRows; i++) {
        container.innerHTML += `<div></div>`;
    }
}



fillWithDivs(numberRows);
container.style.gridTemplateColumns = `repeat(${numberRows}, auto)`
container.style.gridTemplateRows = `repeat(${numberRows}, auto)`
