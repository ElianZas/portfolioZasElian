window.onload = iniciar;

function iniciar() {
  var btn_hamburguer = document.querySelector('.hamburguer');
  var btn_menu = document.querySelector('.mobile .menu');
  btn_hamburguer.addEventListener('click', toggleMenu);
  btn_menu.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  var btn_hamburguer = document.querySelector('.hamburguer');
  var btn_menu = document.querySelector('.mobile .menu');
  btn_hamburguer.classList.toggle('activo');
  btn_menu.classList.toggle('activo');
}    




