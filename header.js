/* <!--------------    Header--------------> */

window.addEventListener("scroll", function () {
  var headerMid = document.querySelector(".header__mid");
  var menuHam = document.querySelector(".menu__hamburger");
  var formBox = document.querySelector(".formbox");
  var scrollPosition = window.scrollY;

  if (scrollPosition >= 1) {
    headerMid.classList.add("sticky");
    menuHam.classList.add("sticky");
    formBox.classList.add("sticky");
  } else {
    headerMid.classList.remove("sticky");
    menuHam.classList.remove("sticky");
    formBox.classList.remove("sticky");
  }
});

const hamburger = document.querySelector(".hamburger");
const menuHam = document.querySelector(".menu__hamburger");
const navMenu = document.querySelector(".menu__hamburger nav");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  menuHam.classList.toggle("active_menu");
  if (window.innerWidth <= 1280) {
    navMenu.classList.toggle("active_navMenu");
  }
});

const formBox = document.querySelector(".formbox");
const closeFormBox = document.querySelector(".formbox .formcontent i");
const btnLog = document.querySelector(
  ".login__child .login__child-item .btn-dn"
);
const btnReg = document.querySelector(
  ".login__child .login__child-item .btn-dk"
);

btnLog.addEventListener("click", function () {
  formBox.classList.toggle("active");
});
btnReg.addEventListener("click", function () {
  formBox.classList.toggle("active");
});
closeFormBox.addEventListener("click", function () {
  formBox.classList.remove("active");
});
/* <!--------------    Header --------------> */
