const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', function() {
  mobileMenu.classList.toggle('hidden');
});


const toggleButton = document.querySelector("#toggleButton");
  const hiddenText = document.querySelector("#hiddenText");
  
  toggleButton.addEventListener("click", function() {
    if (hiddenText.classList.contains("hidden")) {
      hiddenText.classList.remove("hidden");
      toggleButton.innerText = "Ver menos";
    } else {
      hiddenText.classList.add("hidden");
      toggleButton.innerText = "Ver más";
    }
  });