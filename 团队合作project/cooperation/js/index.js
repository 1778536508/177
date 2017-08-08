/**
 * Created by Administrator on 2017/5/10.
 */
$(function ($) {
    
    
   $.ajax({
       url:"data/index.json",
      success:function (data) {
          //var data=JSON.parse(e)
          var list='<div><p>典型应用</p><ul>'
          for(var i in data){
              list+='<li><img src="'+data[i].img+'" alt=""><br><span>'+data[i].title+'</span></li>'
          }
          list+='</ul></div>'
          $(".application").html(list)
      }
   })

    $.ajax({
       url:"data/index2.json",
      success:function (data) {
          //var data=JSON.parse(e)
          var list='<p>合作伙伴</p><ul>'
          for(var i in data){
              list+='<li><img src="'+data[i]+'" alt=""></li>'
          }
          list+='</ul>'
          $(".cooperation").html(list)
      }
   })
    $.ajax({
       url:"data/run.json",
      success:function (data) {
          //var data=JSON.parse(e)
          var  list='<ul class="Carousel">'
          for(var i in data){
              list+='<li><img src="'+data[i]+'"></li>'
          }
          list+='</ul>'
          $(".banner").html(list)
      }
   })
    var index=-1
    function left(){
        index++
       var  width=$(".Carousel>li").width()
        $(".Carousel").css({
            "transition":"1s",
            "transform":"translateX(-"+index*width+"px)"
        })
        if(index>=$(".Carousel>li").length-1){
            index=-1
        }
    }
    setInterval(left,1000)
})