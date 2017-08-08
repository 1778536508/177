
$(function($){

    $.ajax({
        url:"data/data.json",
        success:function(obj){
            //var obj = JSON.parse(e)
            var data = obj.buy
            var str="<p>"+data.title+"</p><p>"+data.content+"</p><table cellspacing='0'>";
                for(var f in data.list){
                    str+="<tr><td>"+data.list[f].add+"</td>" +
                        "<td>"+data.list[f].per+"</td>" +
                        "<td>"+data.list[f].tel+"</td></tr>"

                }
                str+="<tr><td></td><td></td><td></td></tr>"+
                    "<tr><td colspan='3'>"+data.list2.title+"</td></tr>";
                for(var s in data.list2.conlist){
                    str+=
                        "<tr><td>"+data.list2.conlist[s].add+"</td>" +
                        "<td>"+data.list2.conlist[s].per+"</td>" +
                        "<td>"+data.list2.conlist[s].tel+"</td></tr>"
                }
                str+='</table>'
                $("#content").prepend(str)
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

});
