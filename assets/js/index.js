const navItems = document.querySelectorAll('.cambioClase');
navItems.forEach(item => item.addEventListener('click', () => {
  cambiarClase(event);
  clickBtn();
}));

function cambiarClase(event) {
  const elementoClickeado = event.target;
  // Cambiar clases de los elementos de navegación
  navItems.forEach(item => {
    if (item === elementoClickeado) {
      item.classList.remove('text-muted');
      item.classList.add('text-white');
    } else {
      item.classList.remove('text-white');
      item.classList.add('text-muted');
    }
  });
}

function clickBtn() {
  // Obtén el elemento del botón por su ID o alguna otra forma de selección
  const btn = document.getElementById('myButton');
  // Simula un clic en el botón
  btn.click();
}

const btnConvierteteOrador = document.getElementById('btnConvierteteOrador');
btnConvierteteOrador.addEventListener('click', function () {
  cambiarClase({ target: navItems[3] });
});
