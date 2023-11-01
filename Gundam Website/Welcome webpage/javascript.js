const buttons = document.querySelectorAll('.transition-button');
const overlay = document.querySelector('.overlay');

buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();

    // Get the button's position and dimensions
    const rect = button.getBoundingClientRect();

    // Expand the overlay to cover the entire screen
    overlay.style.width = '200vw'; // 100% of viewport width
    overlay.style.height = '200vh'; // 100% of viewport height
    overlay.style.top = '-50%' ; // Set top to 0
    overlay.style.left = '-50%' ; // Set left to 0

    // Redirect to the new page after a delay for the transition effect
    setTimeout(() => {
      window.location.href = button.getAttribute('href');
    }, 500); // Adjust the delay to match the transition time (0.5s in this case)
  });
});
