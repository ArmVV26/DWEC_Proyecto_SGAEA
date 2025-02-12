// Este Js es para el menu desplegable de la pagina web
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-desp").addEventListener("click", function() {
      document.querySelector(".enlaces").classList.toggle("activo");
    });
  });