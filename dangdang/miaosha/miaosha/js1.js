/**
 * Created by k on 2017/9/6.
 */

$(function () {
    var timer = null;
    $("#add").mouseenter(core)
    function core() {
        clearInterval(timer);
        $("#dizhi").css({
            "display":"block",
            "backgroundColor":"white",
            "border":"1px solid #ccc"
        });
    }
    function fn() {
        timer=setTimeout(function () {
            $("#dizhi").hide();
        },200)
    }
    $("#add").mouseleave(fn);
    $("#dizhi").mouseenter(core);
    $("#dizhi").mouseleave(fn);
})
$(function () {
    $("#ul3").mouseenter(function () {
        $("#dangdang").css("display","block");
    })
    $("#ul3").mouseleave(function () {
        $("#dangdang").css("display","none");
    })
    $("#dangdang").mouseenter(function () {
        $("#dangdang").css("display","block");
    })
    $("#dangdang").mouseleave(function () {
        $("#dangdang").css("display","none");
    })
})
$(function () {
    $("#ul4").mouseenter(function () {
        $("#heihei").css("display","block");
    })
    $("#ul4").mouseleave(function () {
        $("#heihei").css("display","none");
    })
    $("#heihei").mouseenter(function () {
        $("#heihei").css("display","block");
    })
    $("#heihei").mouseleave(function () {
        $("#heihei").css("display","none");
    })
})
$(function () {
    $("#ul5").mouseenter(function () {
        $("#hehe").css("display","block");
    })
    $("#ul5").mouseleave(function () {
        $("#hehe").css("display","none");
    })
    $("#hehe").mouseenter(function () {
        $("#hehe").css("display","block");
    })
    $("#hehe").mouseleave(function () {
        $("#hehe").css("display","none");
    })
})



    //---------------------------



    
    // 事件三部曲：
    // 1 获取事件源
    $(".daheiz>ul>").mouseenter(function(){
        $(this).stop().fadeTo(400,1).siblings().stop().fadeTo(400,0.3);
    });
    $(".daheiz").mouseleave(function(){
        $(this).find("li").stop().fadeTo(400,1);
    })

    $(".msdjs>li").on("click", function(){
        $(this).addClass("active")
            .siblings('li').removeClass("active")
    })


    function d(){
            //获取指定时间
        var time = new Date("2017/09/10 00:00:00");
        //获取现在时间
        var now = new Date();
        //现在的毫秒=指定时间-现在时间
        var temp = time - now;
        // 一共有多少个小时
         //现在的小时         现在的时间/1000/60/60
        var hour = Math.floor(temp / 1000 /60 /60);
        //现在的分钟          现在的时间/1000/60- 60*现在的小时
        var mins = Math.floor(temp / 1000 /60 - 60*hour);
        //现在的几秒          现在的时间/1000-刚才的分钟-刚才的小时
        var seds = Math.floor(temp/1000 - mins*60 - hour * 60 * 60);
        hour = hour < 10 ? ('0' + hour) : hour;
        mins = mins < 10 ? ('0' + mins) : mins;
        seds = seds < 10 ? ('0' + seds) : seds;

        $("#hour").text(hour+'时')
        $("#minute").text(mins+'分')
        $("#second").text(seds+'秒')
        //if(seds <10){
        //    $("#second").text("0"+seds+'秒')
        //}

        //console.log(hour, mins, seds);
    }
    d();
    setInterval(d,1000);





$(function(){

    // 在滚动事件中
    $(window).scroll(function(){

        if($(this).scrollTop() >= $("#topPart").outerHeight()) {

            $("#navBar").addClass("fixed")
            $("#topPart").css("margin-bottom",$("#navBar").outerHeight())

        } else {
            $("#navBar").removeClass("fixed")
            $("#topPart").css("margin-bottom","")
        }

    })

})








