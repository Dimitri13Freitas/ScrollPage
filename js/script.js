// Animação da Logo
function logoAdd() {
const path = document.querySelectorAll('path');
const logo = document.querySelector('.logo');

window.onload = () => {
  setTimeout(() => {
    path.forEach((item) => {
      item.setAttribute('fill', '#BDFF02');
      logo.classList.add('sombra')
    });
  }, 1350);
};
};
logoAdd();

// Active
const nav = document.querySelectorAll('#nav li a');
nav.forEach((e) => {
  e.addEventListener('click', () => {
    // console.log(nav);
  });
});