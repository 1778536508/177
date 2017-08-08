/**
 * Created by Administrator on 2017/5/10.
 */
$(function ($) {
   $.ajax({
       url:"data/index.json",
      success:function (obj) {
          //var obj=JSON.parse(e)
          var list=''
          for(var i in obj){
              list+='<p> <span>'+obj[i].title+'</span><br>'
                  // +'</p>'
              for(var a in obj[i].type){
                  list+='<span>'+obj[i].type[a].title+'</span><br><span>'+obj[i].type[a].content+'</span>'
              }
              list+='</p>'
          }
          $(".text").html(list)
      }
   })
})