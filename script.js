document.getElementById('yes').addEventListener('click', function () {
  tot = document.getElementById('tot');
  tot.innerHTML = "<h2>I'm so happy, lover !!! &#128525;</h2>";
});

document.getElementById('no').addEventListener('click', function () {
  this.style.position = 'absolute';
  const maxX = window.innerWidth - this.offsetWidth;
  const maxY = window.innerHeight - this.offsetHeight;
  this.style.top = Math.random() * maxY + 'px';
  this.style.left = Math.random() * maxX + 'px';
});
