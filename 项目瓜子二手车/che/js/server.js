
app.controller("myCtrl10",function(){

    $(".list").on("click","#cl",function(){
        if($(this).parent().next().css("display")=="none"){
            $(this).removeClass("fa fa-angle-down").addClass("fa fa-angle-up");
            $(this).parent().next().show();
        }else{
            $(this).removeClass("fa fa-angle-up").addClass("fa fa-angle-down");
            $(this).parent().next().hide()
        }
    });
;(function($){
    var index = 0;
    var width = $(window).width();
    var len = $("#pics>li").length;
    var sp = $(".tool>span");
    var pics = $("#pics");

    $(".banner").swipeLeft(function(){
        clearInterval(timer);
        go();
    });
    $(".banner").swipeRight(function(){
        clearInterval(timer);
        index--;
        if(index<0){
            index=len-1;
        }
        play(index);
    });
    var timer = setInterval(go,1000);
    function go(){
        index++;
        if(index>len-1){
            index=0
        }
        play(index)
    }
    function play(index){
        var s = index*width+"px";
        pics.css({"margin-left":"-"+s,"transtion":"1s"});
        sp.eq(index).addClass("on").siblings().removeClass("on");
    }
})(Zepto);

});
