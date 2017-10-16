/**
 * Created by Vikingr on 2017/9/3.
 */





$(function(){
    $(".shuru input").val("搜索本店").css("color","#ccc");
    $(".shuru input").focus(function(){
        if ($(this).val()==="搜索本店"){
            $(this).val("");
        }
    });
    $(".shuru input").blur(function(){
        if($(this).val()==="") {
            $(this).val("搜索本店")
        }
    });


    //淡入淡出的轮播图  开始
    var timer = null;
    var k=0;
    clearInterval(timer);
    timer = setInterval(autoPlay,1000);
    $("#box ol li").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $("#box ul li").eq($(this).index()).fadeIn(500).siblings().fadeOut(500);
        k = $(this).index();
    });
    $("#box").mouseenter(function(){
        clearInterval(timer);
    });
    $("#box").mouseleave(function(){
        timer = setInterval(autoPlay,1000);
    });
    $("#left").click(function(){
        k--;
        if (k==-1) {
            k = 4;
        }
        $("#box ol li").eq(k).addClass("active").siblings().removeClass("active");
        $("#box ul li").eq(k).fadeIn(500).siblings().fadeOut(500);
    });
    $("#right").click(function(){
        k++;
        if (k==5) {
            k = 0;
        }
        $("#box ol li").eq(k).addClass("active").siblings().removeClass("active");
        $("#box ul li").eq(k).fadeIn(500).siblings().fadeOut(500);
    });

//淡入淡出轮播图 结束

    //左侧边栏 开始

    $(".dl button").click(function(){
        if ($(this).parents("dt").siblings("dd").css("display")=="none") {
            $(this).parents("dt").siblings("dd").css({"display":"block"});
            $("#hahaha").css("background: url('store.dangdang.com/images/icon_shop.png') no-repeat 0 -100px");
        }
        else {
            $(this).parents("dt").siblings("dd").css({"display":"none"});
        }
    });

    //左侧边栏 结束

    $(window).scroll(function () {
        if($(window).scrollTop()>500){
            $("#boxleft").css("display","block");
            $(".boxbottom a").css("display","block");
        } else if ($(window).scrollTop()<500) {
            $("#boxleft").css("display","none");
            $(".boxbottom a").css("display","none");
        }
    })


    //返回顶部 按钮 开始
    $("#fanhuitop").click(function(){
            $(window).scroll(0,0);
        return false;
    })


    //返回顶部 按钮 结束




    //吸侧 边栏 开始
    $(window).scroll(function(){
        $()
    });
    if ($("#boxleft").scrollTop>"500px") {
        console.log($("boxleft").css({"display":"none"}));
    };














    //吸侧 边栏 结束
























    function autoPlay() {
        k++;
        if (k==5) {
            k = 0;
        }
        $("#box ol li").eq(k).addClass("active").siblings().removeClass("active");
        $("#box ul li").eq(k).fadeIn(500).siblings().fadeOut(500);
    }




})
