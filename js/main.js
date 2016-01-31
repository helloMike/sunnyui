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
            $(this).find('.p1').removeClass('flipInX').addClass('flipOutX').css('display','none');
            $(this).find('.p2').removeClass('p_hover_before').removeClass('flipOutX').addClass('flipInX');
        },function(){
            $(this).find('.p2').removeClass('flipInx').addClass('flipOutX').addClass('p_hover_before');
            $(this).find('.p1').css('display','block').removeClass('flipOutX').addClass('flipInX');
        })
     })
        //project_class_section--------------share
    $('#share > div').each(function(){
        /*
        $(this).hover(function(){
            alert('in');
        },function(){
            alert('out');
        })*/
        var index = $(this).index() + 1;
        var src_hover = 'img/share/share_0'+ index + '_hover.png';
        var src = 'img/share/share_0' + index + '.png';
        $(this).hover(function(){
            $(this).find('img').attr('src',src_hover);
        },function(){
            $(this).find('img').attr('src',src);
        })
    })
});
