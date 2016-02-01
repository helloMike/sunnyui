/**
 * Created by Administrator on 2016/1/26.
 */
$(document).ready(function(){
    $('#myCarousel').carousel('cycle');
    //顶部导航栏消失事件
    $('#top_nav').autoHidingNavbar();
    //project_class_section ----------------class

    $("#project_class_section > div > div:not(:last-child)").each(function(){
        $(this).hover(function(){
            $(this).find('.p1').stop().fadeOut(0,function(){
                $(this).parent().find('.p2').stop().fadeIn(0);
            });

     },function() {
            $(this).find('.p2').stop().fadeOut(0,function(){
                $(this).parent().find('.p1').stop().fadeIn(0);
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
