const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item) => {
  item.addEventListener("click", function () {
    listItems.forEach((li) => {
      li.classList.remove("active");
    });

    this.classList.add("active");

    const childElement = this.querySelector(".child");
    if (childElement) {
      const displayStyle = window
        .getComputedStyle(childElement)
        .getPropertyValue("display");
      if (displayStyle === "none") {
        childElement.style.display = "block";
      } else {
        childElement.style.display = "none";
      }
    }
  });
});

const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

priceRange.addEventListener("input", function () {
  const formattedValue = numberWithCommas(this.value);
  priceValue.textContent = formattedValue + " " + "₫";
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const giftList = document.querySelectorAll(".gift");

giftList.forEach((item) => {
  item.addEventListener("click", function () {
    giftList.forEach((li) => {
      li.classList.remove("active");
    });

    this.classList.add("active");

    const childElement = this.querySelector(".gift .text");
    if (childElement) {
      const displayStyle = window
        .getComputedStyle(childElement)
        .getPropertyValue("display");
      if (displayStyle === "none") {
        childElement.style.display = "block";
      } else {
        childElement.style.display = "none";
      }
    }
  });
});

window.addEventListener("scroll", function () {
  var navMenu = this.document.querySelector(".main__content nav");
  var scrollPosition = window.scrollY;

  if (scrollPosition >= 450) {
    navMenu.classList.add("sticky");
  } else {
    navMenu.classList.remove("sticky");
  }
  if (window.innerWidth <= 768) {
    if (scrollPosition >= 200) {
      navMenu.classList.add("sticky");
    } else {
      navMenu.classList.remove("sticky");
    }
  }
});
