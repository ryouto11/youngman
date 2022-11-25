window.onload = function () {
    $(".loader").delay(2000).fadeOut();
};
$(function () {
    console.log("js起動確認");
    $(".hamburger").click(
        function(){
            $(this).toggleClass("active");
        }
    )



})