const sketchpad = document.querySelector('#sketchpad');
const color = document.querySelector('#color');
const eraser = document.querySelector('#eraser');
const gridSelector = document.querySelector('#gridSelector');

for (let i = 0; i < 256; i++) {
  const tempDiv = document.createElement('div');
  tempDiv.classList.add('grid');
  tempDiv.setAttribute('id', 'grid');
  //   tempDiv.innerText = i;
  sketchpad.appendChild(tempDiv);
}

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

  const gridSize = event.target.value;
  const gridCount =
    gridSize === 'sixteen' ? 256 : gridSize === 'twentyfour' ? 576 : 1024;

  for (let i = 0; i < gridCount; i++) {
    const tempDiv = document.createElement('div');
    tempDiv.classList.add('grid');
    tempDiv.setAttribute('id', 'grid');
    sketchpad.appendChild(tempDiv);

    tempDiv.addEventListener('mouseenter', (event) => {
      event.target.style.backgroundColor = color.value;
    });
  }
});

eraser.addEventListener('click', (event) => {
  const grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => {
    grid.style.backgroundColor = 'transparent';
  });
});
