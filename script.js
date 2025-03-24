const bgColorChanger = document.querySelector('#bgColorChanger');
const colorCode = document.querySelector('#colorCode');


function colorChange() {
  console.log('bg changed');
  // colors => rgb
  // r:0-255;
  // g:0-255;
  // b:0-255;

  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  colorCode.textContent = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

}


bgColorChanger.addEventListener('click',colorChange)