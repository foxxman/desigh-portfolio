"use script";

const buttonOpen = document.querySelector('.open');
const headerNav = document.querySelector('.header__nav');

buttonOpen.addEventListener('click',()=>{
    buttonOpen.classList.toggle('open-active');
    headerNav.classList.toggle('header__nav-active');
})