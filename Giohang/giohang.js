const btnCart = document.querySelector(".cart .btn-dathang");
const btnInfo = document.querySelector(".info .btn-dathang");
const btnPay = document.querySelector(".pay .btn-dathang");
const cart = document.querySelector(".cart");
const info = document.querySelector(".info");
const pay = document.querySelector(".pay");
const done = document.querySelector(".done");
const infoTextCart = document.querySelector(".info .cartText");
const payTextCart = document.querySelector(".pay .cartText");
const payTextInfo = document.querySelector(".pay .infoText");
const doneTextCart = document.querySelector(".done .cartText");
const doneTextInfo = document.querySelector(".done .infoText");
const doneTextPay = document.querySelector(".done .payText");

btnCart.addEventListener("click", function () {
  cart.style.opacity = "0";
  cart.style.visibility = "hidden";
  info.style.opacity = "1";
  info.style.visibility = "visible";
});
btnInfo.addEventListener("click", function () {
  info.style.opacity = "0";
  info.style.visibility = "hidden";
  pay.style.opacity = "1";
  pay.style.visibility = "visible";
});
btnPay.addEventListener("click", function () {
  pay.style.opacity = "0";
  pay.style.visibility = "hidden";
  done.style.opacity = "1";
  done.style.visibility = "visible";
});

infoTextCart.addEventListener("click", function () {
  info.style.opacity = "0";
  info.style.visibility = "hidden";
  cart.style.opacity = "1";
  cart.style.visibility = "visible";
});
payTextCart.addEventListener("click", function () {
  pay.style.opacity = "0";
  pay.style.visibility = "hidden";
  cart.style.opacity = "1";
  cart.style.visibility = "visible";
});
payTextInfo.addEventListener("click", function () {
  pay.style.opacity = "0";
  pay.style.visibility = "hidden";
  info.style.opacity = "1";
  info.style.visibility = "visible";
});
doneTextInfo.addEventListener("click", function () {
  done.style.opacity = "0";
  done.style.visibility = "hidden";
  info.style.opacity = "1";
  info.style.visibility = "visible";
});
doneTextCart.addEventListener("click", function () {
  done.style.opacity = "0";
  done.style.visibility = "hidden";
  cart.style.opacity = "1";
  cart.style.visibility = "visible";
});
doneTextPay.addEventListener("click", function () {
  done.style.opacity = "0";
  done.style.visibility = "hidden";
  pay.style.opacity = "1";
  pay.style.visibility = "visible";
});
