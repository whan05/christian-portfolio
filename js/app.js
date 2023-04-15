const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
});


const toggleButton = document.querySelector("#toggleButton");
const hiddenText = document.querySelector("#hiddenText");

toggleButton.addEventListener("click", function () {
  if (hiddenText.classList.contains("hidden")) {
    hiddenText.classList.remove("hidden");
    toggleButton.innerText = "Ver menos";
  } else {
    hiddenText.classList.add("hidden");
    toggleButton.innerText = "Ver más";
  }
});


const progressBarOptions = {
  strokeWidth: 2,
  color: '#fff',
  trailColor: '#eee',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: { width: '100%', height: '100%' },
  from: { color: '#FFEA82' },
  to: { color: '#ED6A5A' },
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
};

const progressBar = new progressBar.Line('.progress-bar', progressBarOptions);

progressBar.animate(0.75);
