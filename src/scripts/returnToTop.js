// Create a button element
const returnToTopButton = document.querySelector(".return-to-top");
returnToTopButton.setAttribute("aria-label", "Return to top of page");
returnToTopButton.setAttribute("id", "return-to-top");
returnToTopButton.setAttribute("title", "Return to top of page");

// Smooth scroll function
function scrollToTop(duration) {
  const element = document.documentElement;
  const to = 0;
  const difference = element.scrollTop - to;
  const perTick = (difference / duration) * 10;

  setTimeout(function () {
    element.scrollTop = element.scrollTop - perTick;
    if (element.scrollTop === to) return;
    scrollToTop(duration - 10);
  }, 10);
}

// Show the button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 100 && !returnToTopButton.classList.contains("hidden")) {
    returnToTopButton.style.display = "block";
  } else {
    returnToTopButton.style.display = "none";
  }
});

// Scroll to top when the button is clicked
returnToTopButton.addEventListener("click", (event) => {
  // Disable default behaviour
  event.preventDefault();

  scrollToTop(600);
});
