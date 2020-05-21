const body = document.querySelector("body");

const IMAGE_NUMBER = 3;

function paintImage(Number) {
  const image = new Image();
  image.src = `images/${Number + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER);
  return number;
}

function init() {
  paintImage(getRandom());
}

init();
