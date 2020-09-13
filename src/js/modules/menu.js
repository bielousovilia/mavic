const menu = () => {
  const burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    items = menu.querySelectorAll('.menu__list-item');

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('active');
    document.body.classList.toggle('lock');
    menu.classList.toggle('active');
    document.querySelector('.menu__list').classList.toggle('active');
  });

  menu.addEventListener('click', () => {
    if (window.screen.width <= 768) {
      burger.classList.remove('active');
      document.body.classList.remove('lock');
      menu.classList.remove('active');
      document.querySelector('.menu__list').classList.remove('active');
    }
  });

};

export default menu;