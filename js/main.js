/**
 * Created by Administrator on 2016/1/26.
 */
$(document).ready(function(){
    $('#myCarousel').carousel('cycle');
    //
    $(window).bind('scroll',function(){
        var window_height = $(window).height();
        var window_width = $(window).width();
        var scrolltop_height = window_height * 0.3;
        if(window_width > 768){
            if($(window).scrollTop() > scrolltop_height){
                $('#top_nav').addClass('on');
            }else{
                $('#top_nav').removeClass('on');
            }
        }
    })
    //
    $(window).bind('resize',function(){
        var window_width = $(window).width();
        var window_height = $(window).height();
        var scrolltop_height = window_height * 0.3;
        var screen_width = 768;
        if(window_width <= screen_width){
            $('#top_nav').addClass('on');
        }else if($(window).scrollTop() < scrolltop_height){
            $('#top_nav').removeClass('on');
        }
    })


});
