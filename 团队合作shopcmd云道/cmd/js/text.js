$("#j-xiala").on("click",function(e){
    e.preventDefault();
    if($(this).find("ol").css("display")=="none"){
        $(this).find("ol").slideDown();
        $(".xiala2").show()
    }
    else{
        $(this).find("ol").slideUp();
        $(".xiala2").hide()
    }
});
//返回顶部js效果
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.gundongtiao').fadeIn();
        } else {
            $('.gundongtiao').fadeOut();
        }
    });
    $('.gundongtiao').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });
//移入头部
$(".head>ul>li").on("hover","a",function(){
    $(this).addClass("on")
});

//移入体验
$(".tiyan").hover(function(){
    $(this).css("background","orange");
    $(this).find("a").css("color","white")
},function(){
    $(this).css("background","white");
    $(this).find("a").css("color","orange")
});

//经典案例移入
$('.liu>ul>li:nth-of-type(1)').hover(function(){
    $(".img1").hide()
    $(".img2").show().css("margin-top","2px")
},function(){
    $(".img1").show()
    $(".img2").hide()
})


