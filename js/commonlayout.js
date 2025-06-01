document.addEventListener("DOMContentLoaded", function () {

    /* 필터 */
    const langTriggers = document.querySelectorAll('.filter p');

    langTriggers.forEach(p => {
        p.addEventListener('click', function () {
            const selElement = this.closest('.filter');
            if (selElement) {
                selElement.classList.toggle('on');
            }
        });
    });

    $('.mp_list li').on('click', function () {
        // li에서 on 제거 후, 클릭된 li에 on 추가
        $('.mp_list li').removeClass('on');
        $(this).addClass('on');

        // 클래스명 추출 (on 제외)
        const className = $(this).attr('class').split(' ').find(cls => cls !== 'on');

        // mp_right 안에 있는 div의 on 제거 후, 해당 클래스에 on 추가
        $('.mp_right > div').removeClass('on');
        $('.mp_right > .' + className).addClass('on');
    });

    /* 리스트들 하나씩 좌르륵 뜨게 하는 거 */
    const listItems = document.querySelectorAll('.list_small');

    const observer = new IntersectionObserver((entries) => {
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

    listItems.forEach(item => {
        observer.observe(item);
    });

    /* 셀럽리스트 */
    const celebItems = document.querySelectorAll('.celebsmall');

    const observer2 = new IntersectionObserver((entries) => {
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

    celebItems.forEach(item => {
        observer2.observe(item);
    });

    /* 구독 리스트 */
    const subsItems = document.querySelectorAll('.subs_list_small');

    const observer3 = new IntersectionObserver((entries) => {
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

    subsItems.forEach(item => {
        observer3.observe(item);
    });

    /* 패션할인 */
    const saleItems = document.querySelectorAll('.sale_wrap');

    const observer4 = new IntersectionObserver((entries) => {
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

    saleItems.forEach(item => {
        observer4.observe(item);
    });

    /* 조회수 */
    const topperItems = document.querySelectorAll('.toppersmall, .topper_left, .thumb_small, .thumb_big');

    const observer7 = new IntersectionObserver((entries) => {
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

    topperItems.forEach(item => {
        observer7.observe(item);
    });

    /* trend 페이지 반응형별 효과 적용 */
    let currentMode = null; // 현재 적용된 모드 (desktop / mobile)
    let observer5 = null; // IntersectionObserver 참조용

    function clearEffects() {
        // Hover 이벤트 제거
        $('.list_right ul li').off('mouseenter mouseleave');

        // 클래스 초기화
        $('.list_left img').removeClass('active');
        $('.list_right ul li').removeClass('on');

        // IntersectionObserver 해제
        if (observer5) {
            observer5.disconnect();
            observer5 = null;
        }
    }

    function applyDesktopEffect() {
        $('.list_right ul li').hover(
            function () {
                const className = $(this).attr('class');
                $('.list_left img').removeClass('active');
                $('.list_left img.' + className).addClass('active');
            },
            function () {
                $('.list_left img').removeClass('active');
            }
        );
    }

    function applyMobileEffect() {
        const trendItems = document.querySelectorAll('.list_right ul li');

        observer5 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('on');
                } else {
                    entry.target.classList.remove('on');
                }
            });
        }, {
            threshold: 0.2
        });

        trendItems.forEach(item => observer5.observe(item));
    }

    function updateEffect() {
        const width = window.innerWidth;

        if (width >= 1200 && currentMode !== 'desktop') {
            clearEffects();
            applyDesktopEffect();
            currentMode = 'desktop';
        } else if (width <= 1024 && currentMode !== 'mobile') {
            clearEffects();
            applyMobileEffect();
            currentMode = 'mobile';
        }
    }

    // 최초 실행
    updateEffect();

    // 브라우저 크기 변경 시 자동 전환
    $(window).on('resize', function () {
        updateEffect();
    });




});