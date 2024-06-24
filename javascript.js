// Container for the body element
const container = document.createElement('div');
document.body.appendChild(container);


// Container for the title element
const title = document.createElement('h1');
title.setAttribute('id', 'title')
title.textContent = 'Etch-a-Sketch';
container.appendChild(title);

//Buttons

//Container border for the grid
const gridBorder = document.createElement('div');
gridBorder.setAttribute('id', 'gridBorder');
container.appendChild(gridBorder);

// Creation of grid boxes
for (let i = 0; i <256; i++) { 
let gridBox = document.createElement('div');
gridBox.setAttribute('id', 'gridBox');
gridBox.height = `${700/numberofGrid}px`
gridBox.width = `${700/numberofGrid}px`
gridBorder.appendChild(gridBox);
}

