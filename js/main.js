/**
 * Created by Administrator on 2016/1/26.
 */
$(document).ready(function(){
    $('#myCarousel').carousel('cycle');
    //顶部导航栏图片切换动画
        //logo
    $('.navbar-brand').hover(function(){
        $(this).stop().animate({
            width:'200px',
            easing:'swing'
        },500);
       $(this).find('img:first-child').stop().fadeOut(500,'swing');
       $(this).find('img:last-child').stop().fadeIn(500,'swing');
    },function(){
        $(this).stop().animate({
            width:'65px',
            easing:'swing'
        },500);
        $(this).find('img:first-child').stop().fadeIn(500,'swing');
        $(this).find('img:last-child').stop().fadeOut(500,'swing');
    })
        //message&favorite
    $('#top_nav_content>ul>li>a').each(function() {
            $(this).hover(function(){
                $(this).find('img:first-child').stop().fadeOut(500,'swing');
                $(this).find('img:last-child').stop().fadeIn(500,'swing');
            },function(){
                $(this).find('img:first-child').stop().fadeIn(500,'swing');
                $(this).find('img:last-child').stop().fadeOut(500,'swing');
            })
        }
    )
    //顶部导航栏消失事件
    $('#top_nav').autoHidingNavbar();
    //project_class_section ----------------class

    $("#project_class_section > div > div:not(:last-child)").each(function(){
        $(this).hover(function(){
            $(this).find('.p1').stop().fadeOut(300,'swing')
            $(this).find('.p2').stop().fadeIn(300,'swing')
     },function() {
            $(this).find('.p2').stop().fadeOut(300,'swing')
            $(this).find('.p1').stop().fadeIn(300,'swing')
        })
    })

        //project_class_section--------------share

    $('#share > div').each(function(){
        var $img_01 = $(this).find('img:first-child');
        var $img_02 = $(this).find('img:last-child');
        $(this).hover(function(){
            $img_01.stop().fadeOut(300,'swing');
            $img_02.stop().fadeIn(300,'swing');
        },function(){
            $img_01.stop().fadeIn(300,'swing');
            $img_02.stop().fadeOut(300,'swing');
        })
    })
        //sunnyui_design_section-----------------视觉差
    /*                 视觉差效果一
    $('#sunnyui_design_section').parallaxmouse({
        invert: true,
        range: 400,
        elms: [
            {el: $('#sd_bg_01'), rate: 0.08},
            {el: $('#sd_bg_02'), rate: 0.05},
            {el: $('#sd_bg_03'), rate: 0.05},
            {el: $('#sd_bg_04'), rate: 0.03},
            {el: $('#sd_bg_05'), rate: 0.02}
        ]
    });
    */
    //                视觉效果差二
    $('#sunnyui_design_section').parallax();
});
