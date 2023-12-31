/**
 * @file effects.js
 * @description This file contains the code for the effects of the website.
 *
 */

/**
 * @function slideIn
 * @description This function slides in any element as it comes into view.
 */

// Get all the elements to slide in
const slideInElements = document.querySelectorAll(".slide-in-left, .slide-in-right, .slide-in-bottom, .slide-in-top");

// Create an observer
const slideInObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > 0 && !entry.target.classList.contains("animation-finished")) {
			entry.target.classList.add("slide-in-animation");

			// Add a class to prevent the animation from running again
			entry.target.classList.add("animation-finished");

			// Remove the class after the animation is done
			setTimeout(() => {
				entry.target.classList.remove("slide-in-animation");
			}, 1000);
		}
	});
});

// Observe each element
slideInElements.forEach((element) => {
	slideInObserver.observe(element);
});


// Fade in animation
const fadeInElements = document.querySelectorAll(".fade-in");

// Create an observer
const fadeInObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > 0 && !entry.target.classList.contains("animation-finished")) {
			entry.target.classList.add("fade-in-animation");

			// Add a class to prevent the animation from running again
			entry.target.classList.add("animation-finished");

			// Remove the class after the animation is done
			setTimeout(() => {
				entry.target.classList.remove("fade-in-animation");
			}, 1000);
		}
	});
});

// Observe each element
fadeInElements.forEach((element) => {
	fadeInObserver.observe(element);
});
