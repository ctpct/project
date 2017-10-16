/**
 * Created by 87906 on 2017/9/5.
 */
window.onload = function(){

    var denlu = document.getElementById("denlu");
    var zhuce = document.getElementById("zhuce");
    var dbody = document.getElementById("d-body");
    var zbody = document.getElementById("z-body")
    var fork =document.getElementById("fork");
    var mask = document.getElementById("mask");
    var pubin = document.getElementById("pub-in");
    var more = document.getElementById("more");
    var moreC = document.getElementById("more-c")
    denlu.onclick = function(){
        denlu.style.backgroundColor="#fff";
        zhuce.style.backgroundColor="#f5f5f5";
        zbody.style.display = "none";
        dbody.style.display="block";
    }
    zhuce.onclick = function(){
        zhuce.style.backgroundColor="#fff";
        denlu.style.backgroundColor="#f5f5f5";
        dbody.style.display="none";
        zbody.style.display = "block";
    }
    fork.onclick = function(){
        mask.style.display="none";
    }

    pubin.onclick = function(){
        console.log(1);
        mask.style.display="block";
    }
    //分享更多
    more.onclick = function(){

        if(moreC.style.display="none"){
            moreC.style.display="block";
            console.log(122);
            console.log(moreC.style.display)
        }else if(moreC.style.display="block"){
            moreC.style.display="none";
            console.log(111);
        }

    }
//注册


//轮播
    var bigbox = document.getElementById("lun")
    var left = document.getElementById("b-l");
    var right = document.getElementById("b-r");
    var spot = document.getElementById("spot")
    var aUl = bigbox.children;
    var aSpot = spot.children;






    dot1(aSpot,aUl)
    function dot1(e1,e2){
        for(var i=0;i<e1.length;i++){
            e1[i].index=i;
            e1[i].onclick = function(){
                for(var j = 0;j<e1.length;j++){
                    e1[j].className = "";
                    e2[j].style.display = "none";
                }
                console.log(this.index)
                this.className = "on";
                e2[this.index].style.display = "block";
            }
        }

    }


    var num=0;
    left.onclick = function(){
        num--;
        if(num<0 ){
            num=aSpot.length-1;
        }
        for(var j = 0;j<aSpot.length;j++){
            aSpot[j].className = "";
            aUl[j].style.display = "none";
        }
        aUl[num].style.display = "block";
        aSpot[num].className = "on";
    }
    right.onclick = function(){
        num++;
        if(num>aSpot.length-1 ){
            num=0;
        }
        for(var j = 0;j<aSpot.length;j++){
            aSpot[j].className = "";
            aUl[j].style.display = "none";
        }
        aUl[num].style.display = "block";
        aSpot[num].className = "on";
    }



//下轮播
    var spot1 = document.getElementById("spot1");
    var aSpot1 = spot1.children;
    var xia = document.getElementById("xia");
    var li = xia.children;


        for(var i=0;i<aSpot1.length;i++){
            aSpot1[i].index=i;
            aSpot1[i].onclick = function(){
                for(var j = 0;j<aSpot1.length;j++){
                    aSpot1[j].className = "";
                }
                console.log(this.index)
                this.className = "on";
                var sss = -940*this.index;
                move(xia,sss)
                key = this.index;
                square = this.index;
            }
        }
    var key = 0;
    var square = 0;
    var xleft = document.getElementById("b-l1");
    var xright = document.getElementById("b-r1");
    xleft.onclick = function(){
        key--;
        square--;
        console.log(aSpot1.length-1);
        if(square ===-1){
            square = 4;
        }
        if(key ===-1){
            xia.style.left = -940*(aSpot1.length)+"px";
            key = 4
            console.log(xia.style.left);
        }
        for(var j = 0;j<aSpot1.length;j++){
            aSpot1[j].className = "";
        }
        aSpot1[square].className = "on";
        var sss = -940*key;

        move(xia,sss)
    }
    xright.onclick = function(){
        key++;
        square++;
        if(square ===5){
            square = 0;
        }
        if(key === 5){
            xia.style.left = 0;
            key = 1;
        }
        for(var j = 0;j<aSpot1.length;j++){
            aSpot1[j].className = "";
        }
        aSpot1[square].className = "on";
        var sss = -940*key;
        console.log(key)

        move(xia,sss)



    }
    //滑动


    function move(ele,target){
        clearInterval(ele.timer);
        ele.timer = setInterval(function(){
            var step = target>ele.offsetLeft?50:-50;
            ele.style.left = ele.offsetLeft + step +"px";
            if(Math.abs(target-ele.offsetLeft)<= Math.abs(step)){
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        },13)
    }







}