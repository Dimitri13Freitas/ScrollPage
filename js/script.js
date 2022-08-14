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

// animação na navegação
function navAnime() {
const li = document.querySelectorAll('#nav ul li');
const slider = document.querySelector('.tabSlide');

slider.style.width = li[0].clientWidth + 'px';
slider.style.height = li[0].clientHeight + 'px';

slider.style.left = li[0].getBoundingClientRect().x + 'px';

li.forEach((linkPage) => {

  linkPage.addEventListener('click', () => {
    
    slider.style.width = linkPage.clientWidth + 'px';
    slider.style.height = linkPage.clientHeight + 'px';
    
    slider.style.left = linkPage.getBoundingClientRect().x + 'px';

    li.forEach((e) => {
      e.firstElementChild.classList.remove('active');
    });
    linkPage.firstElementChild.classList.add('active');
  });
});
};
navAnime();

// Mensagem que segue o cursor na página de dev
function windowMove() {
  const dev = document.querySelector('.devPortfolio');
  const devMessage = document.querySelector('.devWindowMoveContainer');

  dev.addEventListener('mousemove', (e) => {
    let x = e.clientX + 25;
    let y = e.clientY;
  
    devMessage.style.left = x + 'px'
    devMessage.style.top = y + 'px'
  });

};
windowMove();