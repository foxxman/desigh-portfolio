"use script";

const buttonOpen = document.querySelector(".open");
const headerNav = document.querySelector(".header__nav");
const pointDescr = document.getElementsByClassName(
  "services__point__descriotion"
);
const pointTextMobile = [
  "Разработка дизайна в графическом редакторе с учетом пожеланий клиента",
  "Разработка дизайна с последующей вёрсткой на Tilda ",
  "Дизайн разрабатывается с учётом фирменного стиля компании",
];
console.log(window.innerWidth);

buttonOpen.addEventListener("click", () => {
  buttonOpen.classList.toggle("open-active");
  headerNav.classList.toggle("header__nav-active");
});

if (window.innerWidth < 610)
  for (let i = 0; i < 3; i++) pointDescr[i].innerHTML = pointTextMobile[i];