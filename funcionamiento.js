document.getElementById('mobile-nav-button').addEventListener('click', function() {
    var elemento = document.getElementById('nav-mobile');
    // Verificar el estado actual del display y cambiarlo
    elemento.style.display = (elemento.style.display === 'none' || elemento.style.display === '') ? 'flex' : 'none';
  });
