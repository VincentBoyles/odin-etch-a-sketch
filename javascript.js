// Container for the body element
const container = document.createElement('div');
document.body.appendChild(container);


// Container for the title element
const title = document.createElement('h1');
title.setAttribute('id', 'title')
title.textContent = 'Etch-a-Sketch :D';
container.appendChild(title);

//Button Container
const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('id', 'buttonContainer');
container.appendChild(buttonContainer);


//Container border for the grid
const gridBorder = document.createElement('div');
gridBorder.setAttribute('id', 'gridBorder');
container.appendChild(gridBorder);


// Function for creating squares
function createGrid (squares) {
    gridBorder.innerHTML='';
    let totalGrid = squares*squares;
for (let i = 0; i <totalGrid; i++) { 
const gridBox = document.createElement('div');
gridBox.setAttribute('id', 'gridBox');
let gridRowColumn = Math.abs(700/squares);
gridBox.style.height = `${gridRowColumn}px`;
gridBox.style.width =  `${gridRowColumn}px`;
gridBox.addEventListener('mouseover', event => {
    colorChoice = Math.floor(Math.random() * 7);
    switch (colorChoice) {
        case 1:
            colorChoice = 'red';
            break;
        case 2:
            colorChoice = 'orange';
            break;
        case 3:
            colorChoice = 'yellow';
            break;
        case 4:
            colorChoice = 'green';
            break;
        case 5:
            colorChoice = 'blue';
            break;
        case 6:
            colorChoice = 'indigo';
            break;
        case 7:
            colorChoice = 'violet';
            break;
    }
    event.target.style.backgroundColor = colorChoice;
});
gridBorder.appendChild(gridBox);
};
}


//Default creation of 16x16
createGrid(16);


// Grid Button
const numberOfGrids = document.createElement('button');
numberOfGrids.textContent = 'Change number of squares';
buttonContainer.appendChild(numberOfGrids);


// Creation of new grids from button
numberOfGrids.addEventListener('click', function() {
    let newSquares = (prompt('Enter a number between 16 to 100: '))
    if (newSquares === null) {
        return;
    } else if (newSquares < 16 || newSquares > 100 || isNaN(newSquares))  {
        alert('Error: Invalid Value')
    } else {
        createGrid(newSquares);
    }
});

