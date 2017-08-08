$.ajax({
    dataType:"json",
    url:"data/shouye.json",
    success:function(data){
//  	var data = JSON.parse(data);
        var list=data.dong,
            jieshao="",zhineng="",guanli="",dianxing="",xinwen="",
            left="",center="",right="",
            li="",guanli_left="",dianxing_li="",xinwen_li=""
        for(var i in list){
            var list2=list[i]
            if(i==0){
                for(var j in list2.left){
                    left+="<li><img src='img/"+list2.left[j].src+"'><br>"+list2.left[j].wenzi+"</li>"
                }
                for(var k in list2.center){
                    center+="<p>"+list2.center[k]+"</p>"
                }
                jieshao+="<header>"+list[i].biaoti+"</header><div class='content'><div class='left'><ul>"+left+"</ul></div><div class='center'>"+center+"</div><div class='right'><img src='img/tubiao5.jpg'></div></div>"
            }else if(i==1){
                for(var a in list2.con){
                    li+="<li><img src='img/"+list2.con[a].src+"'><br>"+list2.con[a].wenzi+"</li>"
                }
                zhineng+="<header>"+list[i].biaoti+"</header><div class='gengduo'>更多>></div><ul>"+li+"</ul>"
            }else if(i==2){
                for(var z in list2.con){
                    guanli_left+="<div class='left'><img src='img/"+list2.con[z].img+"'><p>"+list2.con[z].p1+"</p><p>"+list2.con[z].p2+"</p></div>"
                }
                guanli+=" <header>"+list2.biaoti+"</header><div>"+guanli_left+"</div>"
            }else if(i==3){
                for(var c in list2.con){
                    dianxing_li+="<li><img src='img/"+list2.con[c].src+"'><p>"+list2.con[c].p1+"</p><p>"+list2.con[c].p2+"</p></li>"
                }
                dianxing+="<header>"+list[i].biaoti+"</header><div class='gengduo'>更多>></div><ul>"+dianxing_li+"</ul>"
            }else if(i==4){
                for(var v in list2.con){
                    xinwen_li+="<li><img src='img/"+list2.con[v].src+"'><p>"+list2.con[v].p1+"</p><p>"+list2.con[v].p2+"</p></li>"
                }
                xinwen+="<header>"+list[i].biaoti+"</header><div class='gengduo'><a href='../xinwenerji/xinwen.html'>更多>></a></div><ul>"+xinwen_li+"</ul>"
            }
        }
        $(".main-jieshao").html(jieshao)
        $(".main-zhineng").html(zhineng)
        $(".main-guanli").html(guanli)
        $(".main-dianxing").html(dianxing)
        $(".main-xinwen").html(xinwen)
    }
})

$.ajax({
    url:"data/run.json",
    success:function (data) {
//        var data=JSON.parse(e)
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
