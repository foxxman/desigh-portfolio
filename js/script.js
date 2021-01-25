"use script";
new WOW().init();

const openButton = document.querySelector('.open-menu');
const navMini = document.querySelector('.header__nav-mini');
const body = document.querySelector('body');
const closeButton = document.querySelector('.close');
const line_2 = document.querySelector('.line-2');
const line_5 = document.querySelector('.line-5');
const line_8 = document.querySelector('.line-8');
const cells = document.querySelectorAll('.works__cell');
const worksTitle =document.querySelector('.works__title ');



if(window.screen.width<570){
    line_2.classList.remove('wow');
    line_5.classList.remove('wow');
    line_8.classList.remove('wow');

    worksTitle.classList.remove('wow', 'animate__animated');
    cells.forEach(item =>{
        item.classList.remove('wow','animate__animated');
    })
}

openButton.addEventListener('click',()=>{
    navMini.classList.remove('animate__fadeOutRightBig');
    navMini.classList.add('animate__fadeInRightBig')
    navMini.style = "display:block;";
    body.style = "overflow: hidden;";
})

closeButton.addEventListener('click',()=>{
    navMini.classList.remove('animate__fadeInRightBig');
    navMini.classList.add('animate__fadeOutRightBig');
    // navMini.style = "display:none;";
    body.style = "overflow: visible;";
})