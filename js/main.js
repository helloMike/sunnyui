/**
 * Created by Administrator on 2016/1/26.
 */
$(document).ready(function(){
    $('#myCarousel').carousel('cycle');
   /*
    //顶部导航栏滚动事件
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
    //顶部导航栏随窗口大小改变事件
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
*/
    //顶部导航栏消失事件
    $('#top_nav').autoHidingNavbar();
    //project_class_section ----------------class
    $("#project_class_section > div > div:not(:last-child)").each(function(){
        $(this).hover(function(){
            /*
            $(this).find('.p1').removeClass('slideInUp').addClass('slideOutUp').css('display','none');
            $(this).find('.p2').removeClass('p_hover_before').removeClass('slideOutUp').addClass('slideInUp');
        },function(){
            $(this).find('.p2').removeClass('slideOutUp').addClass('slideInUp').addClass('p_hover_before');
            $(this).find('.p1').css('display','block').removeClass('slideOutUp').addClass('slideInUp');
        })*/
            $(this).find('.p1').stop().fadeOut(0,function(){
                $(this).parent().find('.p2').stop().fadeIn(100);
            });

     },function() {
            $(this).find('.p2').stop().fadeOut(0,function(){
                $(this).parent().find('.p1').stop().fadeIn(100);
            });
        })
    })
        //project_class_section--------------share
    $('#share > div').each(function(){
        var $img_01 = $(this).find('img:first-child');
        var $img_02 = $(this).find('img:last-child');
        $(this).hover(function(){
            $img_01.stop().fadeOut(0,function(){
                $img_02.stop().fadeIn(500);
            })

        },function(){
            $img_02.stop().fadeOut(0,function(){
                $img_01.stop().fadeIn(1000);
            })
        })
    })
});
