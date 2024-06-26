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
for (let i = 0; i <100; i++) { 
const gridBox = document.createElement('div');
gridBox.setAttribute('id', 'gridBox');
gridBox.style.height = "70px";
gridBox.style.width =  "70px";


// Mouse over event
gridBox.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'black';
});
gridBorder.appendChild(gridBox);
}

