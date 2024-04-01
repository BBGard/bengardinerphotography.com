/**
 * This file contains all the code for the buttons on the page
 * (e.g. the "Next" buttons)
 */

// Smooth scroll function
function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;


  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
  }, 10);
}

  // Find all buttons with the class "scroll-btn" and add a click event listener to them
const scrollButtons = document.querySelectorAll(".scroll-btn");

scrollButtons.forEach((button) => {

    button.addEventListener("click", (event) => {
      // Disable default behaviour
      event.preventDefault();

      // Get the link from the button
      const link = button.getAttribute("href");

      // Find the element with the id that matches the link
      const element = document.querySelector(link);

      // Scroll to the element slowly
      // element.scrollIntoView({ behavior: "smooth" });
      scrollTo(document.documentElement, element.offsetTop, 600);

    });
  }
);
