/**
 * Created by 123 on 2017/9/2.
 */
//
window.onload = function () {
    var ban = document.getElementById("ban");
    banArr = ban.children;
    var tan = document.getElementById("tan");
    tanArr = tan.children;
    for (var i = 0; i < banArr.length; i++) {
        banArr[i].index = i;
        banArr[i].onmouseenter = function () {
            for (j = 0; j < banArr.length; j++) {
                banArr[j].style.border = "";
                banArr[j].style.borderRight = "";
                tanArr[j].style.display = "none";
            }
            this.style.border = "2px solid red";
            this.style.borderRight = "";
            tanArr[this.index].style.display = "block";
            tanArr[this.index].style.borderTop = "0";
        }
    }
    var banner = document.getElementById("banner");
    banner.onmouseleave = function () {
        for (j = 0; j < banArr.length; j++) {
            banArr[j].style.border = "";
            banArr[j].style.borderRight = "";
            tanArr[j].style.display = "none";
        };
    }

    //返回顶部小火箭
    var liangce6 = document.getElementById("liangce6");
    var target = 0,leader = 0,timer = null;
    liangce6.onclick = function () {
        timer = setInterval(function () {
            leader = scrollTop();
            var step = (target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            window.scrollTo(0,leader);
            console.log(1);
            if(target === leader){
                clearInterval(timer);
            }
        },30);
    }
    function scrollTop(){
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    //倒计时
    var timer = setInterval(function () {
        var nowTime = new Date().getTime();
        var fulTime = new Date("2017/10/15 00:00:00").getTime();
        var sjz = fulTime - nowTime;

        var hour = parseInt(sjz/1000/60/60%24);
        var min = parseInt(sjz/1000/60%60);
        var sec = parseInt(sjz/1000%60);
        hour = hour<10?"0"+hour:hour;
        min = min<10?"0"+min:min;
        sec = sec<10?"0"+sec:sec;
        var daojishi = document.getElementById("daojishi");
        daojishi.innerHTML = hour+"     "+min+" "+sec;
    })



    var first = document.getElementById("first");
    var imgWidth = first.offsetWidth;
    var lun1 = document.getElementById("lun1");
    var lun1LiArr = lun1.children;
    var ol = document.getElementById("ol");
    var fangxiang = document.getElementById("fangxiang");
    var left1 = document.getElementById("left1");
    var right1 = document.getElementById("right1");
    for(var i=0;i<lun1LiArr.length;i++){
        var li = document.createElement("li");
        li.innerHTML = i+1;
        ol.appendChild(li);
    }
    var olLiArr = ol.children;
    olLiArr[0].className = "active";
    var newLi = lun1LiArr[0].cloneNode(true);
    lun1.appendChild(newLi);
    for(var i=0;i<olLiArr.length;i++){
        olLiArr[i].index = i;
        olLiArr[i].onmouseover = function () {
            for(var j=0;j<olLiArr.length;j++){
                olLiArr[j].className = "";
            }
            this.className = "active";
            var sss = -imgWidth*this.index;
            animate(lun1,sss);
            console.log(this.index);
            if(square === 4 && this.index === 0){
                animate(lun1,sss-imgWidth*(lun1LiArr.length-1));
            }
            if(square === 4 && this.index === 1){
                animate(lun1,-imgWidth*(lun1LiArr.length-1), function () {
                    lun1.style.left = 0;
                    animate(lun1,-imgWidth*1);
                });
            }
            key = this.index;
            square = this.index;
        }
    }
    var key = 0;
    var square = 0;
    right1.onclick = autoPlay;
    left1.onclick = function () {
        key--;
        square--;
        if(square === -1){
            square = olLiArr.length-1;
        }
        if(key === -1){
            lun1.style.left = -(lun1LiArr.length-1)*imgWidth+"px";
            key = lun1LiArr.length-2;
        }
        for(var j=0;j<olLiArr.length;j++){
            olLiArr[j].className = "";
        }
        olLiArr[square].className = "active";
        var sss = -imgWidth*key;
        animate(lun1,sss);
    }
    var timer = setInterval(autoPlay,3000);
    first.onmouseenter = function () {
        fangxiang.style.display = "block";
        clearInterval(timer);
    }
    first.onmouseleave = function () {
        fangxiang.style.display = "none";
        timer = setInterval(autoPlay,3000);
    }
    function autoPlay() {
        key++;
        square++;
        if(square === olLiArr.length){
            square = 0;
        }
        if(key === lun1LiArr.length){
            lun1.style.left = 0;
            key = 1;
        }
        for(var j=0;j<olLiArr.length;j++){
            olLiArr[j].className = "";
        }
        olLiArr[square].className = "active";
        var sss = -imgWidth*key;
        animate(lun1,sss);
    }

    function animate(ele,target){
        if(ele.timer !== undefined){
            clearInterval(ele.timer);
        }
        ele.timer = setInterval(function () {
            var step = target>ele.offsetLeft?10:-10;
            ele.style.left = ele.offsetLeft + step + "px";
            if(Math.abs(target-ele.offsetLeft) <= Math.abs(step)){
                ele.style.left = target + "px";
                clearInterval(ele.timer)
            }
        },13)

    }
    var right1 = document.getElementById("liangce-right1");
    right1.onclick = function () {
        window.scrollTo(0,1500);
    }
    var right2 = document.getElementById("liangce-right2");
    right2.onclick = function () {
        window.scrollTo(0,2200);
    }
    var right3 = document.getElementById("liangce-right3");
    right3.onclick = function () {
        window.scrollTo(0,3200);
    }
    var right4 = document.getElementById("liangce-right4");
    right4.onclick = function () {
        window.scrollTo(0,3800);
    }
    var right5 = document.getElementById("liangce-right5");
    right5.onclick = function () {
        window.scrollTo(0,4400);
    }
}
//固定导航栏
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() >= 750){
            $("#guding").addClass("fixed")
            $("#guding").css("display","block")
        }else {
            $("#guding").removeClass("fixed")
            $("#guding").css("display","none")
        }
    })
})
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() >= 400 && $(this).scrollTop() <= 5500){
            $("#liangce-right").fadeIn(1000)
        }else{
            $("#liangce-right").fadeOut(1000)
        }
    })
})
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() >= 1500) {
            $("#liangce-right1").css("background", "url(images/fix_box_icon_161205.png) no-repeat -40px 0")
            $("#liangce-right1").css("backgroundColor", "#93d46f")
            $("#liangce-right2").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -520px")
            $("#liangce-right2").css("backgroundColor", "#efefef")
            $("#liangce-right3").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -240px")
            $("#liangce-right3").css("backgroundColor", "#efefef")
            $("#liangce-right4").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -480px")
            $("#liangce-right4").css("backgroundColor", "#efefef")
            $("#liangce-right5").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -561px")
            $("#liangce-right5").css("backgroundColor", "#efefef")
        }
    })
})
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() >= 2200) {
            $("#liangce-right1").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 0")
            $("#liangce-right1").css("backgroundColor", "#efefef")
            $("#liangce-right2").css("background", "url(images/fix_box_icon_161205.png) no-repeat -40px -520px")
            $("#liangce-right2").css("backgroundColor", "#f97f67")
            $("#liangce-right3").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -240px")
            $("#liangce-right3").css("backgroundColor", "#efefef")
            $("#liangce-right4").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -480px")
            $("#liangce-right4").css("backgroundColor", "#efefef")
            $("#liangce-right5").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -561px")
            $("#liangce-right5").css("backgroundColor", "#efefef")
        }
    })
})
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() >= 3200) {
            $("#liangce-right1").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 0")
            $("#liangce-right1").css("backgroundColor", "#efefef")
            $("#liangce-right2").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -520px")
            $("#liangce-right2").css("backgroundColor", "#efefef")
            $("#liangce-right3").css("background", "url(images/fix_box_icon_161205.png) no-repeat -40px -240px")
            $("#liangce-right3").css("backgroundColor", "#72d599")
            $("#liangce-right4").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -480px")
            $("#liangce-right4").css("backgroundColor", "#efefef")
            $("#liangce-right5").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -561px")
            $("#liangce-right5").css("backgroundColor", "#efefef")
        }
    })
})
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() >= 3800) {
            $("#liangce-right1").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 0")
            $("#liangce-right1").css("backgroundColor", "#efefef")
            $("#liangce-right2").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -520px")
            $("#liangce-right2").css("backgroundColor", "#efefef")
            $("#liangce-right3").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -240px")
            $("#liangce-right3").css("backgroundColor", "#efefef")
            $("#liangce-right4").css("background", "url(images/fix_box_icon_161205.png) no-repeat -40px -480px")
            $("#liangce-right4").css("backgroundColor", "#ff857f")
            $("#liangce-right5").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -561px")
            $("#liangce-right5").css("backgroundColor", "#efefef")
        }
    })
})
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() >= 4400) {
            $("#liangce-right1").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 0")
            $("#liangce-right1").css("backgroundColor", "#efefef")
            $("#liangce-right2").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -520px")
            $("#liangce-right2").css("backgroundColor", "#efefef")
            $("#liangce-right3").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -240px")
            $("#liangce-right3").css("backgroundColor", "#efefef")
            $("#liangce-right4").css("background", "url(images/fix_box_icon_161205.png) no-repeat 0 -480px")
            $("#liangce-right4").css("backgroundColor", "#efefef")
            $("#liangce-right5").css("background", "url(images/fix_box_icon_161205.png) no-repeat -40px -561px")
            $("#liangce-right5").css("backgroundColor", "#f97f67")
        }
    })
})
$(function () {
    $("#liangce-right1").click(function () {
        $(".main3").scrollTop = 1500;
    })
})
$(function () {
    $("#liangce-right1").mouseenter(function () {
        $("#liangce-right1-1").stop().fadeIn(200);
    })
    $("#liangce-right1").mouseleave(function () {
        $("#liangce-right1-1").stop().fadeOut(200);
    })
})
$(function () {
    $("#liangce-right2").mouseenter(function () {
        $("#liangce-right1-2").stop().fadeIn(200);
    })
    $("#liangce-right2").mouseleave(function () {
        $("#liangce-right1-2").stop().fadeOut(200);
    })
})
$(function () {
    $("#liangce-right3").mouseenter(function () {
        $("#liangce-right1-3").stop().fadeIn(200);
    })
    $("#liangce-right3").mouseleave(function () {
        $("#liangce-right1-3").stop().fadeOut(200);
    })
})
$(function () {
    $("#liangce-right4").mouseenter(function () {
        $("#liangce-right1-4").stop().fadeIn(200);
    })
    $("#liangce-right4").mouseleave(function () {
        $("#liangce-right1-4").stop().fadeOut(200);
    })
})
$(function () {
    $("#liangce-right5").mouseenter(function () {
        $("#liangce-right1-5").stop().fadeIn(200);
    })
    $("#liangce-right5").mouseleave(function () {
        $("#liangce-right1-5").stop().fadeOut(200);
    })
})
//表单输入
$(function () {
    $("#jiaodian").focus(function () {
        if($(this).val() == "开学大促 每200减100") {
            $(this).val("");
        }
    })
    $("#jiaodian").blur(function () {
        if($(this).val() == ""){
            $(this).val("开学大促 每200减100");
        }
    })
})
$(function () {
    $("#jiaodian2").focus(function () {
        if($(this).val() == "开学大促 每200减100") {
            $(this).val("");
        }
    })
    $("#jiaodian2").blur(function () {
        if($(this).val() == ""){
            $(this).val("开学大促 每200减100");
        }
    })
})
//关闭广告
$(function () {
    $("#anniu").click(function () {
        $("#guanggao").css("display","none");
    })
})

//右侧精灵图弹出动画
$(function () {
    $("#liangce1").mouseenter(function () {
        $("#liangce1-1").stop().animate({"right":"34px"},400)
    })
    $("#liangce1").mouseleave(function () {
        $("#liangce1-1").stop().animate({"right":"-66px"},400)
    })
})
$(function () {
    $("#liangce2").mouseenter(function () {
        $("#liangce1-2").stop().animate({"right":"34px"},400)
    })
    $("#liangce2").mouseleave(function () {
        $("#liangce1-2").stop().animate({"right":"-66px"},400)
    })
})
$(function () {
    $("#liangce3").mouseenter(function () {
        $("#liangce1-3").stop().animate({"right":"34px"},400)
    })
    $("#liangce3").mouseleave(function () {
        $("#liangce1-3").stop().animate({"right":"-66px"},400)
    })
})
$(function () {
    $("#liangce4").mouseenter(function () {
        $("#liangce1-4").stop().animate({"right":"34px"},400)
    })
    $("#liangce4").mouseleave(function () {
        $("#liangce1-4").stop().animate({"right":"-66px"},400)
    })
})
$(function () {
    $("#liangce5").mouseenter(function () {
        $("#liangce1-5").stop().animate({"right":"34px"},400)
    })
    $("#liangce5").mouseleave(function () {
        $("#liangce1-5").stop().animate({"right":"-66px"},400)
    })
})
$(function () {
    $("#liangce6").mouseenter(function () {
        $("#liangce1-6").stop().animate({"right":"34px"},400)
    })
    $("#liangce6").mouseleave(function () {
        $("#liangce1-6").stop().animate({"right":"-66px"},400)
    })
})
$(function () {
    $("#liangce-botton1").mouseenter(function () {
        $("#erweima").css("display","block");
    })
    $("#liangce-botton1").mouseleave(function () {
        $("#erweima").css("display","none");
    })
})
//搜索框分类
$(function () {
    $("#feilei").mouseenter(function () {
        $("#feilei1").css("display","block");
    })
    $("#feilei").mouseleave(function () {
        $("#feilei1").css("display","none");
    })
    $("#feilei1").mouseenter(function () {
        $("#feilei1").css("display","block");
    })
    $("#feilei1").mouseleave(function () {
        $("#feilei1").css("display","none");
    })
})

$(document).ready(function(){
    var timer = null;
    var num = 0;
    $("#ol2 li").mouseover(function(){
        core($(this).index());
        num = $(this).index();
    });
    function　core(num) {
        $("#ol2 li").eq(num).addClass("active").siblings().removeClass("active");
        $("#lun2 li").eq(num).fadeIn(2000).siblings().fadeOut(2000);
    }
    function autoPlay(){
        num++;
        if(num>$("#ol2 li").length-1) num = 0;
        core(num);
    }
    timer = setInterval(autoPlay,2000);
    $("#second").mouseenter(function(){
        clearInterval(timer);
        $("#second #fangxiang1").fadeIn();
    })
    $("#second").mouseleave(function(){
        timer = setInterval(autoPlay,2000);
        $("#second #fangxiang1").fadeOut();
    })
    $("#left2").click(function(){
        num--;
        if(num<0) num = $("#ol2 li").length-1;
        core(num);
    })
    $("#right2").click(function(){
        autoPlay();
    })
})
$(function () {
    $("#gaoliang li").mouseenter(function () {
        $(this).css("opacity","1");

    })
    $("#gaoliang li").mouseleave(function () {
        $(this).css("opacity","0.96");

    })
})
$(document).ready(function(){
    var timer = null;
    var num = 0;
    $("#ol3 li").mouseover(function(){
        core($(this).index());
        num = $(this).index();
    });
    function　core(num) {
        $("#ol3 li").eq(num).addClass("active3").siblings().removeClass("active3");
        $("#lun3 li").eq(num).fadeIn(2000).siblings().fadeOut(2000);
    }
    function autoPlay(){
        num++;
        if(num>$("#ol3 li").length-1) num = 0;
        core(num);
    }
    timer = setInterval(autoPlay,2000);
    $("#third").mouseenter(function(){
        clearInterval(timer);
        $("#third #fangxiang3").fadeIn();
    })
    $("#third").mouseleave(function(){
        timer = setInterval(autoPlay,2000);
        $("#box #fangxiang3").fadeOut();
    })
    $("#left3").click(function(){
        num--;
        if(num<0) num = $("#ol3 li").length-1;
        core(num);
    })
    $("#right3").click(function(){
        autoPlay();
    })
})
$(function () {
    $("#tab>li").mouseenter(function () {
        $(this).css("backgroundColor","white").siblings().css("backgroundColor","#e6e6e6");
        //$("#chuqiao>div").eq($(this).index()).css("display","block").siblings().css("display","none");
        $("#chuqiao>div").eq($(this).index()).stop().show(400).siblings().stop().hide(400);

    })
})
$(document).ready(function(){
    var timer = null;
    var num = 0;
    $("#ol4 li").mouseover(function(){
        core($(this).index());
        num = $(this).index();
    });
    function　core(num) {
        $("#ol4 li").eq(num).addClass("active").siblings().removeClass("active");
        $("#lun4 li").eq(num).fadeIn(2000).siblings().fadeOut(2000);
    }
    function autoPlay(){
        num++;
        if(num>$("#ol4 li").length-1) num = 0;
        core(num);
    }
    timer = setInterval(autoPlay,2000);
    $("#four").mouseenter(function(){
        clearInterval(timer);
        $("#four #fangxiang4").fadeIn();
    })
    $("#four").mouseleave(function(){
        timer = setInterval(autoPlay,2000);
        $("#four #fangxiang4").fadeOut();
    })
    $("#left4").click(function(){
        num--;
        if(num<0) num = $("#ol4 li").length-1;
        core(num);
    })
    $("#right4").click(function(){
        autoPlay();
    })
})
$(function () {
    $("#xinxi>li").mouseenter(function () {
        $(this).css("backgroundColor","white").siblings().css("backgroundColor","#e6e6e6");
        $("#xiang>ul").eq($(this).index()).css("display","block").siblings().css("display","none");
    })
})
$(function () {
    //var timer = null;
    $("#add").mouseenter(core)
    function core() {
        //clearInterval(timer);
        $("#dizhi").css({
            "display":"block",
            "backgroundColor":"white",
            "border":"1px solid #ccc"
        });
    }
    function fn() {
        //timer=setTimeout(function () {
            $("#dizhi").hide();
        //},200)
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
//$(function () {
//    $("#shou>li").mouseenter(function () {
//        $(this).css("height","120").siblings().css("height","36");
//        $(this).last().css("display","block");
//    })
//})