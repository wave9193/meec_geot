 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

/*let more = document.getElementsByClassName("viewmore");
let but = document.getElementsByClassName("more");

function viewHideMore () {
  for( i=0; i < more.length; i++) {
    for( u=0; u < but.length; u++) {
      if(i === u) {
        document.getElementsByClassName("viewmore")[i].classList.toggle("hide")
      }
    }
  }
}*/

let more = document.getElementsByClassName("viewmore");
let but = document.getElementsByClassName("more");

function viewHideMore(i) {
  more[i].classList.toggle("hide");
}

for (let i = 0; i < but.length; i++) {
  but[i].addEventListener("click", () => viewHideMore(i));
}

