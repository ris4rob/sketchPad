const div = document.createElement('div');
const sketchpad = document.querySelector('#sketchpad');
const color = document.querySelector('#color');

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
