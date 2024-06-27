// Container for the body element
const container = document.createElement('div');
document.body.appendChild(container);


// Container for the title element
const title = document.createElement('h1');
title.setAttribute('id', 'title')
title.textContent = 'Etch-a-Sketch';
container.appendChild(title);

//Button Container
const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('id', 'buttonContainer');
container.appendChild(buttonContainer);


// Grid Button
const numberOfGrids = document.createElement('button');
numberOfGrids.textContent = 'Number of Grids';
buttonContainer.appendChild(numberOfGrids);


// Creation of New Grids
numberOfGrids.addEventListener('click', function() {
    let newSquares = Number(prompt('Enter a number between 16-100'));
    if (newSquares === null) {
        return;
    } else if (newSquares < 16 || newSquares > 100 || isNaN(newSquares)) {
        alert('Wrong input value!');
    } else {
            let newGrid = squares*squares;
            for (let i = 0; i <newGrid; i++) { 
            const newBox = document.createElement('div');
            newBox.setAttribute('id', 'newBox');
            let newRowColumn = (700/newSquares);
            newBox.style.height = `${newRowColumn}px`;
            newBox.style.width =  `${newRowColumn}px`;
            gridBorder.replaceChild(newBox);
        }
    }
});

//Container border for the grid
const gridBorder = document.createElement('div');
gridBorder.setAttribute('id', 'gridBorder');
container.appendChild(gridBorder);

// Creation of grid boxes
let squares = 16;
let totalGrid = squares*squares;
for (let i = 0; i <totalGrid; i++) { 
const gridBox = document.createElement('div');
gridBox.setAttribute('id', 'gridBox');
let gridRowColumn = (700/squares);
gridBox.style.height = `${gridRowColumn}px`;
gridBox.style.width =  `${gridRowColumn}px`;

// Mouse over event
gridBox.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'black';
});
gridBorder.appendChild(gridBox);
};



