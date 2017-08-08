
	

	$.ajax({
		type:"get",
		url:"data/banner.json",
		async:true,
		success:function(obj){
			//var obj = JSON.parse(e);
			console.log(obj);	
			
			
			//渲染轮播图
			var bann = obj.banner;
			var ul = "<ul id='imgContent'>";
			for(var i in bann){
				ul+="<li><img src='img/"+bann[i]+"'></li>";
			}
			ul+="</ul>";
			$("#banner").html(ul);
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			//渲染短信信息
			var not = obj.note;
			var str = "<div class='note'>";
			str+="<p><img src='img/"+not.remove+"'/></p>";
			str+="<p>"+not.text+"</p>";
			str+="</div>";
			$("#banner").append(str);
			
			//渲染下载方式
			var down = obj.download;
			var tan = "";
			for(var i in down){
				tan+="<div class='"+down[i].class+"'><ul>";
				tan+="<li><img src='img/"+down[i].Animg+"'/><span>"+down[i].title+"</span></li>";
				tan+="<li><img src='img/"+down[i].noimg+"'/><span>"+down[i].notext+"</span></li>";
				tan+="<li><img src='img/"+down[i].brainimg+"'/><span>"+down[i].braintext+"</span></li>";
				tan+="<li><img src='img/"+down[i].yardimg+"'/><br/><span>"+down[i].yardtext+"</span></li>";
		    	tan+="</ul></div>";	
			}
			$("#banner").append(tan);
			
			
			
			// 获取元素
			var imgContent = document.getElementById('imgContent');
			// 添加计时器，每个2秒移动到下一张
			// 定义变量用来记录下一张的下标
			var index = 1;
			setInterval(function() {
				// 显示下一张
				clearInterval(imgContent.timer);
				// 添加计时器实现图片切换时的动画
				imgContent.timer = setInterval(function() {
					imgContent.style.marginLeft = imgContent.offsetLeft-5 +'px';
					// 判断是否到达目标位置
					if(imgContent.offsetLeft <= index*(-1366)){
						clearInterval(imgContent.timer);
						index++; // 到达目标位置之后修改下一张的下标
						// 判断如果当前显示的是最后一张，切换到第一张
						if(index > 4){
							imgContent.style.marginLeft = '0px';
							index = 1;
						}
					}
					
				}, 5);
				
			}, 3000);
			

			
			
			
		}
	});


