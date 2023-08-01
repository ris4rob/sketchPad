const sketchpad = document.querySelector('#sketchpad');
const color = document.querySelector('#color');
const eraser = document.querySelector('#eraser');
const gridSelector = document.querySelector('#gridSelector');
const grids = document.querySelectorAll('#grid');

grids.forEach((grid) => {
  grid.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = color.value;
  });
});

gridSelector.addEventListener('change', (event) => {
  while (sketchpad.firstChild) {
    sketchpad.removeChild(sketchpad.firstChild);
  }

  let rows = gridSelector.value;
  let columns = gridSelector.value;
  document.documentElement.style.setProperty('--columns', columns);
  document.documentElement.style.setProperty('--rows', rows);
  createDivs(rows, columns);
});

function createDivs(rows, columns) {
  for (let i = 0; i < rows * columns; i++) {
    const tempDiv = document.createElement('div');
    tempDiv.classList.add('grid');
    tempDiv.setAttribute('id', 'grid');
    sketchpad.appendChild(tempDiv);

    tempDiv.addEventListener('mouseenter', (event) => {
      event.target.style.backgroundColor = color.value;
    });
  }
}

eraser.addEventListener('click', (event) => {
  const grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => {
    grid.style.backgroundColor = 'transparent';
  });
});

document.addEventListener('loaded', createDivs(5, 5));
