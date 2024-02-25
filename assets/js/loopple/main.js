
// Get references to the DOM elements
const hamburgerBtn = document.getElementById('ham-btn'); // Represents the hamburger button
const mobileBtn = document.getElementById('mobile-menu'); // Represents the mobile menu button

// Initialize the application
function initApp() {
    // Add click event listeners to both buttons
    hamburgerBtn.addEventListener('click', toggleMenu); // When hamburger button is clicked
    mobileBtn.addEventListener('click', toggleMenu); // When mobile menu button is clicked
}

// Toggle the visibility of the mobile menu
function toggleMenu() {
    // Toggle the 'hidden' and 'flex' classes on the mobile menu button
    mobileBtn.classList.toggle('hidden'); // Hide or show the button
    mobileBtn.classList.toggle('flex'); // Change its display style
}

// Wait for the DOM content to be fully loaded, then initialize the app
document.addEventListener('DOMContentLoaded', initApp);
