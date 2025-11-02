
   let index = 0;
const images = document.querySelectorAll('.box img');  

setInterval(() => {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}, 3000);