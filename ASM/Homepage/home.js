/* <!--------------    Main --------------> */
var banners = [
  "/img/slider1.webp",
  "/img/slider2.webp",
  "/img/slider3.webp",
  "/img/slider4.webp",
  "/img/slider5.webp",
];
let src = document.querySelector(".imgleft .imgleft-top img");
let index = Math.floor(Math.random() * banners.length);
src.src = banners[index];

function backPage() {
  index--;
  if (index < 0) {
    index = banners.length - 1;
  }
  src.src = banners[index];
  updateImage();
}
function nextPage() {
  index++;
  if (index > banners.length - 1) {
    index = 0;
  }

  src.src = banners[index];
  updateImage();
}

function updateImage() {
  src.style.opacity = 0.1;
  setTimeout(() => {
    src.src = banners[index];
    fadeIn();
  }, 100);
}

function fadeIn() {
  setTimeout(() => {
    src.style.opacity = 1;
  }, 100);
}

updateImage();

setInterval(() => {
  nextPage();
}, 5000);

/* <!--------------    Main --------------> */
