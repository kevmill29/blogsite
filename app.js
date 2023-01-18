const openMenu = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-nav');

openMenu.addEventListener('click', function(){
   openMenu.classList.toggle('is-active') 
   mobileMenu.classList.toggle('is-active')
});