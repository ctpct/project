window.onload = function () {
    //左侧分会场收起展开部分
    var shouzhan = document.getElementById("sidebar-left");
    var udbtn = document.getElementById("udbutton");
    var jiantou = document.getElementById("jiantou");
    var zhuhuic = document.getElementById("zhuhuichang");
    shouzhan.onclick = function () {
        if (udbtn.innerHTML == "展开") {
            udbtn.innerHTML = "收起";
            jiantou.innerHTML = "<";
            zhuhuic.style.left = "0px";
        }
        else {
            udbtn.innerHTML = "展开";
            jiantou.innerHTML = ">";
            zhuhuic.style.left = "-148px";
        }
    }

    //页面滑动到一定距离展示右侧楼层部分
    var lcright = document.getElementById("sidebar-right");
    window.onscroll = function () {
        if (scrollTop() > 500) {
            show(lcright);
            lcright.style.opacity = 1;
        } else {
            hide(lcright);
            lcright.style.opacity = 0;
        }
    }


    //封装页面顶部被卷去的部分;
    function scrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    //封装一个方法，隐藏一个元素
    function hide(ele) {
        ele.style.display = "none";
    }

    //封装一个方法，显示一个元素
    function show(ele) {
        ele.style.display = "block";
    }
    //var img=document.getElementById("daolitu");
    //img.onclick= function () {
    //    var newyuan=document.createElement("div")
    //    img.par.appendChild(newyuan);
    //}

    //var hotul=document.getElementById("hottoutiao");
    //var hotulLi=hotul.children;
    //var key = 0;
    //var timer=null;

















}
