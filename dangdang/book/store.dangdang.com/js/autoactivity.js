(function(){(function(i){var n={browser:{userAgent:navigator.userAgent,isIE:(function(){return navigator.userAgent.indexOf("MSIE")!==-1})(),isChrome:(function(){return navigator.userAgent.indexOf("Chrome")!==-1})(),isFF:(function(){return navigator.userAgent.indexOf("Firefox")!==-1})(),isSafari:(function(){return navigator.userAgent.indexOf("Safari")!==-1})()},vcode:{getVcodeUrl:"http://vcode.dangdang.com/show_vcode.php",checkVcodeUrl:"http://login.dangdang.com/p/vcode_checker_new.php",showVcode:function(q){if(i("#"+q).length>0){i("#"+q).attr("src",n.vcode.getVcodeUrl+"?t="+new Date().getTime())}}},getScrtipPath:function(){var s,q,u,t,r;s=document.getElementsByTagName("script");_reg=new RegExp(n.configs["const"].script+".js");for(j=0,len=s.length;j<len;j++){q=s[j];u=q.src;if(_reg.test(u)){r=u.indexOf(n.configs["const"].script+".js");t=u.substr(0,r);break}}return t},configs:{getActivitiesTimeout:5000,timeout:3000,"const":{script:"autoActivity"},links:{mycoupon:"http://newaccount.dangdang.com/payhistory/mycoupon.aspx",mysafe:"http://safe.dangdang.com/mobile.php"}},lang:{submit:"\u63d0\u4ea4",loading:"\u6b63\u5728\u52a0\u8f7d\u002e\u002e\u002e",getCouponErr:"<p>\u793c\u5238\u9886\u53d6\u5931\u8d25\uff01</p>",vcodeErr:"\u9a8c\u8bc1\u7801\u6709\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",vcodeEmptyErr:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",vcodeText:"\u9a8c\u8bc1\u7801\uff1a",changeVcodeText:"\u6362\u5f20\u56fe",diaSuccessText:"\u0020\u0020\u0020\u0020\u53ef\u4ee5\u53bb",myCouponText:"\u6211\u7684\u793c\u5238",lookupText:"\u67e5\u770b\u3002",sureText:"\u786e\u8ba4",safeBindText:"\u60a8\u8fd8\u672a\u7ed1\u5b9a\u624b\u673a\u53f7\uff0c\u53bb\u5b8c\u6210\u0020",phoneBindText:"\u624b\u673a\u7ed1\u5b9a",phoneTipText:"\u007e\u007e\u007e",integralcomfireText:"\u60a8\u662f\u5426\u786e\u8ba4\u8981\u4f7f\u7528",integralExchangeText:"\u79ef\u5206\u5151\u6362",sheetText:"\u5f20",integralTimeText:"\u793c\u5238\u6709\u6548\u671f\u003a",integralTimeToText:"\u81f3",cancelText:"\u53d6\u6d88",accessErrorText:"\u6b64\u6d3b\u52a8\u8fc7\u4e8e\u706b\u7206\uff0c\u8bf7\u7a0d\u540e\u5c1d\u8bd5"},jquery:"http://static.ddimg.cn/js/coupon/jquery-1.8.0.min.js"};var e,a,c,h,p;var d=null;c="Activities_Compontents_Init";var b={};while(true){if(window[c]===void 0){break}c="Activities_Compontents_Init_"+Math.round(Math.random()*10000)}h=c;if(!i.fn.on){i.fn.on=i.fn.bind}if(!i.fn.off){i.fn.off=i.fn.unbind}document.head=document.head||document.getElementsByTagName("head")[0];var l={map:function(s){var q,r;q=[];for(r in this){if(r==="map"){continue}if(this[r].initLoadFlage==="Yes"){q.push(s(this[r]))}}return q},configs:{"const":{from_page:void 0,script:"newAutoActivity"},links:{checkActivities:"http://couponapi.dangdang.com/getNewActivities.do",pickActivity:"http://couponapi.dangdang.com/newAwardCoupon.do",goShopping:"http://www.dangdang.com",myhome:"http://myhome.dangdang.com/",couponCss:"newAutoActivity.css"},scripts:{LoginWindow:{token:"showMsgBox",url:"http://static.ddimg.cn/js/login/LoginWindow.js"},PhoneAuth:{token:"PhoneAuth",url:"newPhoneAuth.js"}}},exeCouponAwardCallback:function(s,q,r){if(d&&d instanceof Function){d(s,q,r);d=null}}};var f={$:i("<div class='coupon_dialog_jf'><div class='header'><div class='close'></div></div><div class='content'>Loading... </div></div>"),vcode:i("<div class='input-div'> <span class='input_yzm'>"+n.lang.vcodeText+"</span> <input type='text' class='input_kuang' maxlength='4' id='"+h+"_vcode_input' > <a class='button submit' href='javascript:void(0)'><span>"+n.lang.submit+"</span></a><p class='vcode_tip'><span id='"+h+"_vcode_tip'></span></p></div> <div class='input-div'> <img class='coupon_vcode' style='' id='"+h+"_vcode'> <a href='javascript:void(0)' class='change'>"+n.lang.changeVcodeText+"</a> </div>").find("img,a.change").on("click",function(){n.vcode.showVcode(f.vcode.find("img").attr("id"));return false}).end().find(".input_kuang").on("focus",function(){if(i("#"+h+"_vcode_tip").html()!=""){i(this).val("");n.vcode.showVcode(f.vcode.find("img").attr("id"));i("#"+h+"_vcode_tip").html("")}}).end(),success:i("<p><span id='J_couponPublicSucc'></span>"+n.lang.diaSuccessText+" <a href='"+n.configs.links.mycoupon+"' target='_blank'>"+n.lang.myCouponText+"</a> "+n.lang.lookupText+"</p> <div style='margin-top:40px'> <div class='button' onclick='closeDialog();'><span>"+n.lang.sureText+"</span></div> </div>"),safeBind:i("<p>"+n.lang.safeBindText+" <a href='"+n.configs.links.mysafe+"' target='_blank'>"+n.lang.phoneBindText+"</a>"+n.lang.phoneTipText+"</p> <div style='margin-top:40px'> <div class='button' onclick='closeDialog();'><span>"+n.lang.sureText+"</span></div> </div>"),init:function(){f.$.appendTo("body").hide();f.$.find(".header>.close").off("click").on("click",function(){f.close();return false}).end()},close:function(){f.$.hide().find(".content").empty()},show:function(){f.$.show()},set:function(q){f.$.find(".content").html(q);f.$.show()},vcodeErrorTip:function(){}};var k={analyse:function(t){var r,q,s;try{s=t.attr("data-coupon-activity").split("|");r=b["activity_"+s[0]];if(!r){q=l.configs["const"].from_page||s[1];l.configs["const"].from_page=q;r=new m(s[0],t,l.configs["const"].from_page||s[1],s[2],s[3],s[4]);b["activity_"+s[0]]=r}else{r.add(t)}return r}catch(u){return void 0}},doIfScalperSuspect:function(s,r){var q;try{q=function(){var x,v,w,u;try{w=(i("#return_data").val()||"").split("|");if(w.length<2){PhoneAuth.init();return false}v=w.slice(0,2),x=v[0],u=v[1];i.ajax({url:l.configs.links.pickActivity,type:"get",timeout:n.configs.timeout,dataType:"jsonp",jsonp:"callback",data:{activitySerialNumber:r,mobileNumber:x,smsCode:u,fromPage:l.configs["const"].from_page},success:function(z){return k.afterPick(z,r,true)},error:function(A,z){if(z=="timeout"){f.set(n.lang.accessErrorText)}else{f.set(n.lang.accessErrorText)}}})}catch(y){f.set(n.lang.accessErrorText)}};f.close();PhoneAuth.onSuccess=function(){f.show();q();return i("#return_data").val("")};PhoneAuth.goSafeBind=function(){f.set(f.safeBind)};PhoneAuth.goErrorTip=function(){f.set(n.lang.accessErrorText)};return q()}catch(t){return f.set(n.lang.getCouponErr)}},afterPick:function(t,s,q){if(t.status==="Success"){f.set(f.success);i("#J_couponPublicSucc").html(t.errorMessage);l.exeCouponAwardCallback(s,t.status,t.errorMessage)}else{switch(t.errorCode){case 407:k.pickActivity(s,1);break;case 406:f.set(f.safeBind);break;case 403:if(q===true){f.set(n.lang.getCouponErr);l.exeCouponAwardCallback(s,t.status,t.errorMessage);return false}f.set(n.lang.loading);if(!window[l.configs.scripts.PhoneAuth.token]){var r=n.getScrtipPath()+l.configs.scripts.PhoneAuth.url;i.getScript(r,function(){k.doIfScalperSuspect(t,s)})}else{k.doIfScalperSuspect(t,s)}break;case 402:i("#"+h+"_vcode_tip").html(n.lang.vcodeErr);break;default:f.set(t.errorMessage||n.lang.getCouponErr);l.exeCouponAwardCallback(s,t.status,t.errorMessage);break}}},submitAwardCoupon:function(r,q){i.ajax({url:l.configs.links.pickActivity,type:"get",timeout:n.configs.timeout,dataType:"jsonp",jsonp:"callback",data:{activitySerialNumber:r,verifyCode:q,fromPage:l.configs["const"].from_page},success:function(s){k.afterPick(s,r)},error:function(t,s){if(s=="timeout"){f.set(n.lang.accessErrorText)}else{f.set(n.lang.accessErrorText)}}})},pickActivity:function(q,r){var s;if(r=="0"){k.submitAwardCoupon(q,"")}else{s=f.vcode.clone(true);s.find("a.submit").on("click",function(){var t;t=i.trim(i("#"+h+"_vcode_input").val());if(t){k.submitAwardCoupon(q,t)}else{i("#"+h+"_vcode_tip").html(n.lang.vcodeEmptyErr)}return i("#"+h+"_vcode_input").val()});f.set(s);n.vcode.showVcode(h+"_vcode");f.show()}},init:function(){i(function(){var q=document.createElement("link");q.rel="stylesheet";q.href=n.getScrtipPath()+l.configs.links.couponCss;document.head.appendChild(q);f.init();window.closeDialog=f.close;window.CouponTool=n;window.exchangeCoupon=k.pickActivity;p=document.write;document.write=function(r){return i("head").append(r)};if(!window[l.configs.scripts.LoginWindow.token]){i.getScript(l.configs.scripts.LoginWindow.url,function(){document.write=p})}i("[data-coupon-activity]").not(".had_read").each(function(r,u){var t,s;t=i(this);s=k.analyse(t);t.on("click",function(){if(!window[l.configs.scripts.LoginWindow.token]||s.status===0){f.set(s.error||n.lang.getCouponErr);f.show();return false}showMsgBox("","","",function(){var B=s.id;var x=s.activityValidateGraphCode;var z=s.activityPointValue;var A=s.desc;var v=s.couponStartDate;var y=s.couponEndDate;d=null;d=s.awardCallback;if(z!=undefined&&z!="null"&&z>0){var w='<div class="comfire_text_wrap">'+'<div class="comfire_text">'+n.lang.integralcomfireText+' <span id="'+h+'_point_value">'+z+"</span> "+n.lang.integralExchangeText+"</div>"+'<div class="comfire_text">1'+n.lang.sheetText+" <span>"+A+"</span></div>"+'<div class="comfire_text">'+n.lang.integralTimeText+" "+"<span> "+v+" </span>"+n.lang.integralTimeToText+"<span> "+y+" </span></div>"+'<div class="comfire_button"><div class="button comfire" onclick="exchangeCoupon('+B+",'"+x+"');\"><span>"+n.lang.sureText+'</span></div><div class="button cancel" onclick="closeDialog();"><span>'+n.lang.cancelText+"</span></div></div>"+"</div>";return f.set(w)}else{k.pickActivity(B,x)}})}).data("CouponActivity",s)});ids=b.map(function(r){return r.id}).join(",");if(ids&&ids!=""){i.ajax({url:l.configs.links.checkActivities,type:"get",timeout:n.configs.getActivitiesTimeout,dataType:"jsonp",data:{activitySerialNumbers:ids,fromPage:l.configs["const"].from_page},success:function(v){var u,t,s,r;v.status==="Success";r=v.data;for(u in r){t=r[u];s=b["activity_"+u];if(s&&s.init instanceof Function){s.init(t)}}},error:function(s,r){if(r=="timeout"){return false}else{return false}}})}i("script[data-name="+c+"]").remove()})}};var m=(function(){function q(y,u,w,r,v,t,x,s){this.id=y!=null?y:0;this.domJ=u;this.fromPage=w;this.desc=x!=null?x:"";this.status=s!=null?s:1;this.initLoadFlage=t==="init-no-load"?"No":"Yes";this.activityValidateGraphCode=0;this.activityPointValue=0;this.error="";this.couponStartDate="";this.couponEndDate="";this.activityCallback=null;this.awardCallback=null;if(r&&r!=""&&window[r] instanceof Function){this.activityCallback=window[r]}if(v&&v!=""&&window[v] instanceof Function){this.awardCallback=window[v]}}q.prototype.add=function(r){this.domJ=this.domJ.add(r)};q.prototype.pick=function(){};q.prototype.init=function(r){if(r.status==="Success"){this.status=1;if(r.hasOwnProperty("activityValidateGraphCode")){this.activityValidateGraphCode=r.activityValidateGraphCode}if(r.hasOwnProperty("activityPointValue")&&r.activityPointValue!="null"&&r.activityPointValue!=0){this.activityPointValue=r.activityPointValue}if(r.hasOwnProperty("coupons")&&r.coupons[0].hasOwnProperty("couponDescription")&&r.hasOwnProperty("activityDescription")){this.desc=r.coupons[0].couponDescription+"("+r.activityDescription+")"}if(r.hasOwnProperty("coupons")&&r.coupons[0].hasOwnProperty("couponStartDate")){this.couponStartDate=r.coupons[0].couponStartDate.substring(0,10)}if(r.hasOwnProperty("coupons")&&r.coupons[0].hasOwnProperty("couponEndDate")){this.couponEndDate=r.coupons[0].couponEndDate.substring(0,10)}}else{this.status=0;this.error=r.errorMessage}if(this.activityCallback&&this.activityCallback instanceof Function){this.activityCallback(this.id,r.status,r.errorMessage);this.activityCallback=null}};return q})();b.map=l.map;window[c]=k.init;var a=function(){var q;q=document.createElement("script");q.setAttribute("data-name",h);if(n.browser.isFF){q.textContent="window."+h+"();delete window."+h+";"}else{q.text="window."+h+"();"}return document.head.appendChild(q)};if(!i){e=document.createElement("script");e.src=n.jquery;document.head.appendChild(e);if(n.browser.isIE){e.onreadystatechange=function(){var q;q=e.readyState;if(q==="loaded"||q==="complete"){a()}}}else{e.onload=a}}else{var o=n.jquery;var g=false;if(typeof jQuery==="undefined"){g=true}else{if(jQuery.fn.jquery.substr(0,1)<1||jQuery.fn.jquery.substr(2,1)<4){g=true}}if(g){e=document.createElement("script");e.src=n.jquery;document.head.appendChild(e);if(n.browser.isIE){e.onreadystatechange=function(){var q;q=e.readyState;if(q==="loaded"||q==="complete"){a()}}}else{e.onload=a}}else{k.init()}}})(window.jQuery||window.$)})();