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

$(document).ready(function () {
  new WOW().init();
  $("a.buttonLink").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100 + "px",
      },
      {
        duration: 500,
        easing: "swing",
      }
    );
    return false;
  });
  $("a.header__nav__item").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 130 + "px",
      },
      {
        duration: 500,
        easing: "swing",
      }
    );
    buttonOpen.classList.remove("open-active");
    headerNav.classList.remove("header__nav-active");
    return false;
  });
  buttonOpen.addEventListener("click", () => {
    buttonOpen.classList.toggle("open-active");
    headerNav.classList.toggle("header__nav-active");
  });

  if (window.innerWidth < 610)
    for (let i = 0; i < 3; i++) pointDescr[i].innerHTML = pointTextMobile[i];
});
