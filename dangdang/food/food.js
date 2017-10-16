/**
 * Created by tjl on 2017/9/8.
 */
$(function () {
    $("#add").mouseenter(function () {
        $("#dizhi").css("display","block");
        $("#dizhi").css("backgroundColor","white");
        $("#dizhi").css("border","1px solid #ccc");

    })
    $("#dizhi").mouseleave(function () {
        $("#dizhi").css("display","none");
    })
})
$(function () {
    $("#ul3").mouseenter(function () {
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
    $("#heihei").mouseleave(function () {
        $("#heihei").css("display","none");
    })
})
$(function () {
    $("#ul5").mouseenter(function () {
        $("#hehe").css("display","block");
    })
    $("#hehe").mouseleave(function () {
        $("#hehe").css("display","none");
    })
})

