$(function($){
	$.ajax({
		type: "get",
		url: "data/data.json",
		async: true,
		success: function(obj) {
			//var obj = JSON.parse(o);
//			console.log(obj)
			var str = obj.banner;
			var nei = obj.con;
			var nei1 =obj.con2;
			var nei2 = obj.con3;
			
			var biao2="";
			for(var b2 in nei2){
				biao2+="<h1>" + nei2[b2].h1 + "</h1>";
			}
			$("#con4").html(biao2);
			
			
			var ch2 = "<ul id='map'>";
			for(var c2 in nei2[b2].text) {
				var chan2 =nei2[b2].text;
				ch2+="<li><a href=''><img src='img/"+chan2[c2].img+"'><h4>"+chan2[c2].h4+"</h4><label>"+chan2[c2].label+"</label></a></li>"
			}
			ch2+="</ul>"
			$("#con4").append(ch2);
			
			var biao1 ="";
			for(var b1 in nei1){
				biao1+="<h1>" + nei1[b1].h1 + "</h1>";
			}
			$("#con3").html(biao1);
			var ch1 = "<ul>";
			for(var c1 in nei1[b1].text) {
				var chan1 =nei1[b1].text;
				ch1+="<li><a href=''><img src='img/"+chan1[c1].img+"'><p>"+chan1[c1].p+"</p></a></li>"
			}
			ch1+="</ul>"
			$("#con3").append(ch1);
			//h1标题
			var biao ="";
			for(var b in nei) {
				biao += "<h1>" + nei[b].h1 + "</h1>";
			}
//			$("#con").html(biao);
			$("#con2").html(biao);
			//图片
			var ch = "<ul>";
			for(var c in nei[b].text) {
				var chan =nei[b].text;
			ch+="<li><a href='../Three/index.html'><img src='img/"+chan[c].img+"'><p>"+chan[c].p+"</p></a></li>"
			}
			ch+="</ul>"
//			$("#con").append(ch);
			$("#con2").append(ch);
			//轮播图
			var src = "<ul id='pics'>";
			var span = "<p id='bar'>";
			for(var i in str) {
				src += "<li><img src = img/" + str[i].src + "></li>"
				if(i == 0) {
					span += "<span class='on'></span>";
				} else {
					span += "<span></span>";
				}
			}
			src += "</ul>";
			span += "</span>";
			$("#banner").html(src);
			$("#banner").append(span);
		},
		error: function() {
			alert("网络错误");
		}
	});
	var index=-1
    function left(){
        index++
        var  width=$("#pics>li").width()
        $("#pics").css({
            "transition":"1s",
            "transform":"translateX(-"+index*width+"px)"
        })
        if(index>=$("#pics>li").length-1){
            index=-1
        }
    }
    setInterval(left,1000)
})