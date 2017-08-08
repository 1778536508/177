/**
 * Created by Administrator on 2017/5/10.
 */
$(function ($) {
   $.ajax({
       url:"data/index.json",
      success:function (data) {
          //var data=JSON.parse(e)
          var obj=data.data
          var list='<p>问题帮助</p><ul>'
          for(var i in obj){
              list+='<li><p>'+obj[i].problem+'</p><p>'+obj[i].hlep+'</p></li>'
          }
          $(".help").html(list)
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