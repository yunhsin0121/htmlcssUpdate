$(document).ready(function () {
    // 按鈕動畫效果
    $('.header h1 a,.socialMedia li a').hover(function () {
        $(this).toggleClass('animate__animated animate__headShake');
    });

    $('.course img,.message,.item input,.btn,.btn-up,.footer-info li').hover(function () {
        $(this).toggleClass('animate__animated animate__pulse');
    });
    // 下拉選單
    $('.header-menu li a').hover(function (e) { 
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings('ul').stop().slideDown(500);
    },function(){
        $(this).removeClass('active');
        $(this).siblings('ul').stop().slideUp(500);
    });
    $('.dropdown-menu li a').hover(function () {
        $(this).parent().parent().stop().slideDown(500);
        $(this).parent().parent().siblings('a').addClass('active');    
    }, function () {
        $(this).parent().parent().stop().slideUp(500);
        $(this).parent().parent().siblings('a').removeClass('active');
    }
    );
    
    // 上拉按鈕
    $("a[href$='.zip']").addClass('fa-regular fa-circle-up') ;

    $('.btn-up').click(function (e) { 
        e.preventDefault();
        
        $('html,body').animate({
            scrollTop:0});
    });

    $('.btn-up').hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>200){
            $('.btn-up').fadeIn();
        }
        else{
            $('.btn-up').fadeOut();
        }
    });

});