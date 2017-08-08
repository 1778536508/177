
$(".head").on("mouseover",".li",function(){
    $(".ul2").show()
});
$(".head").on("mouseout",".li",function(){
    $(".ul2").hide()
});
$(".ul2>span").on("mouseover",function(){
    $(this).addClass("on").siblings().removeClass("on")
})




$("#ul").on("click","li",function(e){
    e.preventDefault();
    var index = $(this).index();
    var top = index*18.5+"%";
    $(".blue").css({"top":top,"transition":"all 0.2s"})
    if(index==0){
        $(".con_right1").css({"transform":'translateX(0)'})
            .siblings().css({"transform":"translateX(160%)"});
    }
    if(index==1){
        $(".con_right2").css({"transform":'translateX(0)'})
            .siblings().css({"transform":"translateX(160%)"});
    }
    if(index==2){
        $(".con_right3").css({"transform":'translateX(0)'})
            .siblings().css({"transform":"translateX(160%)"});
    }
    if(index==3){
        $(".con_right4").css({"transform":'translateX(0)'})
            .siblings().css({"transform":"translateX(160%)"});
    }
})
