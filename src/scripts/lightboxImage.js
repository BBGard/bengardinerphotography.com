const lightboxImages = document.querySelectorAll(".lightbox-image"); // Select all images with the lightbox-image class
const lightbox = document.querySelector(".lightbox"); // Select the lightbox container
const returnToTopButton = document.querySelector('.return-to-top'); // Select the return to top button
const closeModalButton = document.querySelector('.close-modal'); // Select the close modal button

// If the lightboxImages variable is not null, loop through each image and add an event listener to each image
if (lightboxImages) {
  lightboxImages.forEach((image) => {
    image.addEventListener("click", (event) => {
      lightbox.querySelector("img").src = event.target.src; // Set the src attribute of the image in the lightbox to the src attribute of the image that was clicked
      lightbox.querySelector("img").alt = event.target.alt; // Set the alt attribute of the image in the lightbox to the alt attribute of the image that was clicked
      lightbox.classList.add("active"); // Add the active class to the lightbox container to show the lightbox

      // Toggle the no-scroll class on the body
      document.querySelector("body").classList.toggle("no-scroll");

      // Hide the return to top button when the lightbox is open
      if(!returnToTopButton.classList.contains('hidden')) {
        console.log('yep here')
        returnToTopButton.classList.add('hidden');
        returnToTopButton.style.display = "none"; // Fix for mobile
      }

      // Show the close modal
      closeModalButton.removeAttribute('hidden');

    });
  });
}

// If the lightbox variable is not null, add an event listener to the lightbox container to close on click
if(lightbox) {
  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");

    // Remove the no-scroll class from the body
    document.querySelector("body").classList.remove("no-scroll");

    // Show the return to top button when the lightbox is closed
    if(returnToTopButton.classList.contains('hidden')) {
      returnToTopButton.classList.remove('hidden');
    }

    // Hide the close modal
    closeModalButton.setAttribute('hidden', 'true');
  });
}

if(closeModalButton) {
  closeModalButton.addEventListener("click", () => {
    lightbox.classList.remove("active");

    // Remove the no-scroll class from the body
    document.querySelector("body").classList.remove("no-scroll");

    // Show the return to top button when the lightbox is closed
    if(returnToTopButton.classList.contains('hidden')) {
      returnToTopButton.classList.remove('hidden');
    }

    // Hide the close modal
    closeModalButton.setAttribute('hidden', 'true');
  });
}
