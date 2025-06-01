document.addEventListener("DOMContentLoaded", function () {
    AOS.init();

    $('.ham').click(function () {
        $('.fix').toggleClass('on');

        // fix에 on 클래스가 있으면 x 보이고 menu 숨기기
        if ($('.fix').hasClass('on')) {
            $('.ham .menu').css('opacity', '0');
            $('.ham .x').css('opacity', '1');
        } else {
            $('.ham .menu').css('opacity', '1');
            $('.ham .x').css('opacity', '0');
        }
    });

    /* lang 목록뜨게 */
    const langTriggers = document.querySelectorAll('.sel p');

    langTriggers.forEach(p => {
        p.addEventListener('click', function () {
            const selElement = this.closest('.sel');
            if (selElement) {
                selElement.classList.toggle('on');
            }
        });
    });

    /*     $('nav ul.gnb>li').hover(function () {
            $('ul.sub').stop().slideDown();
        }, function () {
            $('ul.sub').stop().slideUp();
        });한번에 내려오는 거 */

    $('nav ul.gnb>li').hover(function () {
        $(this).find('ul.sub').stop().slideDown();
    }, function () {
        $(this).find('ul.sub').stop().slideUp();
    });
});