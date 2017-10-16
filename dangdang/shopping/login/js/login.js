/**
 * Created by 87906 on 2017/9/3.
 */
window.onload = function(){
    var userInp = document.getElementById("user");
    var pwdInp = document.getElementById("pwd")
    userInp.onfocus = function(){
        if(this.value =="邮箱、昵称、手机号码"){
            this.value = "";
        }
    }
    userInp.onblur = function(){
        if(this.value ===""){
            this.value = "邮箱、昵称、手机号码"
        }
    }
    pwdInp.onfocus = function(){
        if(this.value !=""){
            this.value = "";
        }
    }
    pwdInp.onblur = function(){
        if(this.value ===""){
            this.value = "密码"
        }
    }
}