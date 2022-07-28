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
function navSlide() {
  const nav = document.querySelectorAll('#nav li a');
  const tabSlide = document.querySelector('.tabSlide');

  let navTeste = ['home', 'servicos', 'comunidade', 'dev'];

  nav.forEach((e, index) => {
    e.addEventListener('click', () => {
      tabSlide.classList.remove('home', 'servicos', 'comunidade', 'dev');
      tabSlide.classList.add(navTeste[index]);
      nav.forEach((event) => {
        event.classList.remove('active');
      });
      e.classList.add('active');
    });
  });
};
navSlide();