function getSlideCount(selector) {
  const container = document.querySelector(selector);
  if (!container) return 0;
  return container.querySelectorAll('.swiper-slide').length;
}

function shouldLoop(selector, minSlides = 5) {
  return getSlideCount(selector) >= minSlides + 1;
}
function applySimplyScroll(selector, speed = 9, direction = 'forwards') {
  $(selector).simplyScroll({
    speed,
    direction,
    pauseOnHover: false,
    pauseOnTouch: false,
  })
}
document.addEventListener("DOMContentLoaded", function () {
  // DOM 준비 후 한 프레임 뒤 실행
  requestAnimationFrame(() => {
    /* 메인비주얼 스와이퍼 */
    new Swiper(".main_visual", {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: shouldLoop('.main_visual', 1),
      simulateTouch: true,
      speed: 800,  // 1초 동안 부드럽게 움직임
    });

    new Swiper(".mon_skincare", {
      loop: shouldLoop('.mon_skincare', 2),
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: false,
      initialSlide: 0,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      speed: 1000,
    });

    new Swiper('.store_top', {
      loop: shouldLoop('.store_top', 5),
      autoplay: {
        delay: 1000,
      },
      slidesPerView: 5,
      spaceBetween: 36,
      speed: 2000,
    });

    new Swiper('.store_bottom', {
      loop: shouldLoop('.store_bottom', 5),
      autoplay: {
        delay: 1000,
        reverseDirection: true,
      },
      speed: 2000,
      slidesPerView: 5,
      spaceBetween: 36,
    });
  });

  /* 리스트들 하나씩 좌르륵 뜨게 하는 거 */
  const fashionItems = document.querySelectorAll('.makeupsmall, .makeup_left');

  const observer6 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 요소가 화면에 들어오면 클래스 추가
        entry.target.classList.add('on');
      } else {
        // 요소가 화면에서 나가면 클래스 제거 (반복 애니메이션용)
        entry.target.classList.remove('on');
      }
    });
  }, {
    threshold: 0.2 // 요소의 20%가 보여야 작동
  });
  fashionItems.forEach(item => {
    observer6.observe(item);
  });

  // 심플리 스크롤 적용
  applySimplyScroll('.interaction .txtAniBox');
});
