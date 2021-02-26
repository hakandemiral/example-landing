function changeColor(color) {
  document.querySelector('.circle').style.backgroundColor = color;
}


function changeImage(imgSrc) {
  imgSrc = "./assets/images/" + imgSrc;
  document.querySelector('#main-img').src = imgSrc;
}