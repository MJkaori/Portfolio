/* for welcome button */
const buttons = document.querySelectorAll('.transition-button');
const overlay = document.querySelector('.overlay');

buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();

    const rect = button.getBoundingClientRect();
 
    overlay.style.width = '200vw'; 
    overlay.style.height = '200vh'; 
    overlay.style.top = '-50%' ; 
    overlay.style.left = '-50%' ; 

    setTimeout(() => {
      window.location.href = button.getAttribute('href');
    }, 500);
  });
});

/* for menu mobile viewport content */
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('#menu-toggle');
  const menu = document.querySelector('.menu');

    if(menuToggle) {
      menuToggle.addEventListener('click', () => {
    if (menu.style.display === "none") {
      menu.style.display = "flex";
      menuToggle.innerHTML = "Close";
    }
    else {
      menu.style.display = "none";
      menuToggle.innerHTML = "Menu";
    }
  });
    }
});