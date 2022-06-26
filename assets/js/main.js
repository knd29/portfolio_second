const jsTrigger = document.querySelector(".js-trigger");
const jsTarget = document.querySelectorAll(".js-target");
const links = document.querySelectorAll(".menu__link");

jsTrigger.addEventListener("click", function () {
  jsTarget.forEach((el) => {
    el.classList.toggle("is-active");
  });
});

function removeIsActive() {
  $(".hamburger-icon, .header__nav").removeClass("is-active");
}

$('a[href^="#"]').click(function () {
  // スクロールの速度
  let speed = 400;
  // スクロールタイプ
  let type = "swing";
  // href属性の取得
  let href = $(this).attr("href");
  // 移動先の取得（hrefが#indexならトップ$(html)に、）
  let target = $(href == "#index" ? "html" : href);
  // 移動先のポジション取得
  let position = target.offset().top;
  // animateでスムーススクロール
  $("body,html").animate({ scrollTop: position }, speed, type);

  // メニューを閉じる

  removeIsActive();

  return false;
});

let prevPosition = 0;
let counter = 0;

window.addEventListener('scroll', function () {
  prevPosition = document.documentElement.scrollTop;
  counter = 0;
});

setInterval(() => {
  const currentPosition = document.documentElement.scrollTop;
  $('.btn--btt').mouseover(() => {
    counter = -2
    $(".btn--btt").css("transform", "translateX(24%)");
    clearInterval()
  })

  if(prevPosition === currentPosition) {
    counter += 1;
  }

  if (counter > 1) {
    $(".btn--btt").css("transform", "translateX(120%)");
  }
}, 1000);



$(window).scroll(function () {
  if ($(window).scrollTop() > $(window).height()) {
    $(".btn--btt").css("transform","translateX(24%)");
  } else {
    $(".btn--btt").css("transform", "translateX(120%)");
  }
});
