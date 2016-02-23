window.onload = function() {
  var burger = document.querySelector('img.burger');
  var nav_ul = document.querySelector('nav.navbar ul');
  burger.addEventListener('click', function() {
    nav_ul.classList.toggle('nav-show');
  });

}