;(function($){
	
	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/",
		async:true,
		success:function(res){
			var obj = JSON.parse(res);
			
			
			//渲染轮播图
			var rot = obj.rotate;
			var ul = "<ul id='pics'>";
			var bar = "<p id='bar'>";
			for(var i in rot){
				ul+="<li><img src='img/"+rot[i]+"'></li>";
				if(i==0){
					bar+="<span class='on'></span>";
				}
				bar+="<span></span>";
			}
			ul+="</ul>";
			$("#banner").html(ul);
			bar+="</p>";
			$("#banner").append(bar);
			
			
			//渲染导航图标
			var navIon = obj.icon;
			var nav = "<ul>";
			for(var i in navIon){
				nav+="<li><a href='#'><img src='img/"+navIon[i].map+"'></a><span></span>"+navIon[i].text+"</li>";
//				if(i==6){
//					nav+="<li><a href='#'><img src='img/"+navIon[i].map+"'></a><span class='dot'></span>"+navIon[i].text+"</li>";
//				}
			}
			nav+="</ul>";
			$("#icon").html(nav);
			
	
		
			//渲染商品
			var goods = obj.goods;
			var li = "";
			for(var i in goods){
				li+="<li><a href='#'>";
				li+="<div class='"+goods[i].nuMber+"'>"+goods[i].figure+"</div>";
				li+="<span class='print'><img src='img/"+goods[i].chart+"'></span>";
				li+="<div class='price'><p>"+goods[i].sell+"</p><p><b>"+goods[i].num+"</b>"+goods[i].lose+"<span>"+goods[i].cost+"</span></p></div>";
				li+="<p class='odd'><span>"+goods[i].cash+"</span><img src='img/"+goods[i].reTurn+"'/></p>";
				li+="</a></li>";
			}
//			console.log(li);
			$("#goodScol").html(li);
			
			
			
			//渲染分类
			var sortList = obj.sort;
//			console.log(sortList);
			var str = "";
			for(var i in sortList){
				str+="<div class='sort'>";
				str+="<h2 class='sort_h'>"+sortList[i].title+"<a href='#' class='return'></a></h2>";
				str+="<div class='sort_row'>";
				str+="<div class='"+sortList[i].sortbox.hue+"'>"+sortList[i].sortbox.text+"<img src='img/"+sortList[i].sortbox.img+"'></div>";	
				str+="<div class='sort_col2'><ul>";
				for(var y in sortList[i].sortLi){
//					console.log(sortList[i].sortLi[y]);
					if(sortList[i].sortLi[y].class=="true"){
						str+="<li class='red'><a href='#'>"+sortList[i].sortLi[y].Text+"</a></li>";
					}else{
						str+="<li><a href='#'>"+sortList[i].sortLi[y].Text+"</a></li>";
					}
				}
				str+="</ul></div></div>";
				str+="</div>";
			}
			$("#content").html(str);
//			console.log(str);
	
	
	
	
	
	
	
	
	
	
	
	
	var banner = $("#banner"),
		pics = $("#pics"),
		len = pics.children().size(),
		width = $(window).width(),
		index = 0;
	banner.swipeLeft(function(){
		clearInterval(ser);
		set();
	})
	banner.swipeRight(function(){
		clearInterval(ser);
		arr();
	})
	var ser = setInterval(set,2000);
	function set(){
			index++;
			if(index>len-1){
				index=0;
			}
			server(index);
	}
	function arr(){
			index--;
			if(index<0){
				index=len-1;
			}
			server(index);
	}
	function server(index){
		var s = "-"+index*width+"px";
		pics.css({
			"-webkit-transform":"translateX("+s+")",
			"-webkit-transition":"all 1s"
		})
		$("#bar>span").eq(index).addClass("on").siblings().removeClass("on");
	}
	  			
	
	
	
	
		}
   });
})(Zepto);
