function changeBigImage(event) {
  if (event.target.tagName === "IMG") {
    // Remove the tick class from all img__small-item elements
    const smallImages = document.querySelectorAll(".img__small-item");
    smallImages.forEach((item) => {
      item.classList.remove("tick");
    });

    // Add the tick class to the clicked img__small-item element
    const clickedItem = event.target.parentNode;
    clickedItem.classList.add("tick");

    // Change the src of the big image
    const smallImageSrc = event.target.getAttribute("src");
    document.getElementById("bigImage").setAttribute("src", smallImageSrc);
  }
}
