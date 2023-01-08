const menuList = document.querySelector('.menu-list')
const closeMenu = document.querySelector('.CloseMenu')
const openMenu = document.querySelector('.OpenMenu')

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);

function show(){
    menuList.getElementsByClassName.display ='flex';
    menuList.style.top ='0';
}

function hide(){
    menuList.style.top = '-100%';
}