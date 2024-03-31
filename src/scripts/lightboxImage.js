const lightboxImages = document.querySelectorAll(".lightbox-image");
const lightbox = document.querySelector(".lightbox");
const returnToTopButton = document.querySelector('.return-to-top');

lightboxImages.forEach((image) => {
  image.addEventListener("click", (event) => {
    lightbox.querySelector("img").src = event.target.src;
    lightbox.querySelector("img").alt = event.target.alt;
    lightbox.classList.add("active");

    // Toggle the no-scroll class on the body
    document.querySelector("body").classList.toggle("no-scroll");

    // Hide the return to top button when the lightbox is open
    returnToTopButton.classList.toggle('hidden');
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");

  // Remove the no-scroll class from the body
  document.querySelector('body').classList.remove('no-scroll');

  // Show the return to top button when the lightbox is closed
  returnToTopButton.classList.toggle('hidden');
});
