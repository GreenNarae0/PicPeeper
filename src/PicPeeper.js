const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('original-image');

// Set canvas size to match the image
canvas.width = image.width;
canvas.height = image.height;

// Draw black rectangle on the canvas
// you can change the color to whatever you want
ctx.fillStyle = 'black'; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Set composite operation to 'destination-out'
// if you want to paint again, set this to 'source-over' by using some button's eventListener or something
ctx.globalCompositeOperation = 'destination-out';

// Define the size of the erasing area
const eraserSize = 40;

canvas.addEventListener('mousemove', (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Draw a circle to erase the black
  ctx.beginPath();
  ctx.arc(x, y, eraserSize / 2, 0, Math.PI * 2);
  ctx.fill();
});
