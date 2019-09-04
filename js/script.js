$(function() {
    $(document).scroll(function () {
        const $nav = $(".header_nav");
        const $sec1 = $(".main-title h1")
        $nav.toggleClass('scrolled', $(this).scrollTop() > $sec1.height());
    });
});

$(function() {
    $(document).scroll(function () {
        const $nav = $(".header_nav");
        const $btn = $(".goTop");
        $btn.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(function() {
    $(".top").click(function () {
        $('html,body').animate({ scrollTop: 0 }, '2000');
        return false;
    });

    $(".prof").click(function () {
        const i = $(".prof").index(this);
        const p = $(".sec1").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, '2000');
        return false;
    });

    $(".menu").click(function () {
        const i = $(".menu").index(this);
        const p = $(".sec3").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, '2000');
        return false;
    });

    $(".info").click(function () {
        const i = $(".info").index(this);
        const p = $(".sec5").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, '2000');
        return false;
    });

    $(".goTop").click(function () {
        $('html,body').animate({ scrollTop: 0 }, '2000');
        return false;
    });
});