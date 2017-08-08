
$(function($){

    $.ajax({
        url:"data/data.json",
        success:function(obj) {
            //var obj = JSON.parse(e);
            var str = "";
            str += "<p>" + obj.introduce.title + "</p><p>" + obj.introduce.content + "</p>";
            $(".list_one").prepend(str);

            var str2 = "<ul>";
            for(var i in obj.list_tow){
                str2+="<li>"+obj.list_tow[i].content+""
            }
            for(var f in obj.list_tow.contentlist){
                str2+="<p>"+obj.list_tow[f].contentlist +"</p></li>"
            }
            str2+="</ul>";
            $(".list_tow").append(str2);


            var str3 = "<p>" + obj.xiangxi.tedianlist.title + "</p>";
            for (var s in obj.xiangxi.tedianlist.tedian) {
                str3 += "<ul><li>" + obj.xiangxi.tedianlist.tedian[s] + "</li></ul>"
            }
            $(".list_three").html(str3);


            var you = obj.xiangxi.youshilist.youshi;
            var str4 = "<p>"+obj.xiangxi.youshilist.title+"</p><ul>";
            for (var x in you){
                str4 += "<li>"+ you[x].content+"<br/>";
                for (var j in you[x].contentlist) {
                    str4 += "<span>"+you[x].contentlist[j]+"</span><br/>"
                }
                str4+="</li>"
            }
            str4+="</ul>";
            $(".list_four").html(str4);


            var mubiao =  obj.xiangxi.mubiaolist.mubiao;
            var str5 = "<p>"+obj.xiangxi.mubiaolist.title+"</p><ul>";
            for(var i in mubiao){
                str5 += "<li><span>"+mubiao[i].tit+"</span><span>"+mubiao[i].con+"</span></li>"
            }
            str5+="<ul>";
            $(".list_five").html(str5)



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