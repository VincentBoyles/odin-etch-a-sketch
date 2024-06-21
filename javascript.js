
// Container for the body element
const container = document.createElement('div');
document.body.appendChild(container);


// Container for the title element
const title = document.createElement('h1');
title.setAttribute('id', 'title')
title.textContent = 'Etch-a-Sketch';
container.appendChild(title);


//Container border for the grid
const gridContainer = document.createElement('div');
document.body.appendChild(gridContainer);
const gridBorder = document.createElement('div');
gridBorder.setAttribute('id', 'gridBorder');
gridContainer.appendChild(gridBorder);
