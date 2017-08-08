;(function($) {
	$.ajax({
		type: "get",
		url: "data/data.json",
		async: true,
		success: function(obj) {
			//var obj = JSON.parse(o);
//			console.log(obj)
			//title
			var str="";
				str+="<h1>"+obj.title+"</h1>";
				str+="<h2>"+obj.title2+"</h2>";
			
			
			$("#title").html(str);
			
			//pic
			var tu ="";
			tu+="<img src='img/"+obj.img+"'>";
			$("#pice").html(tu);
			
			//介绍
			var js="";
			for(var i in obj.outline){
				console.log(obj.outline)
				js+="<h3>"+obj.outline[i].title+"</h3><p>"+obj.outline[i].content+"</p>"
			}
			$("#jie").html(js)
			
			//优势
			var ys ="";
			for(var y in obj.advantage){
				ys+="<h3>"+obj.advantage[y].title+"</h3><p>"+obj.advantage[y].content+"</p>"
			}
			$("#youshi").html(ys);
			
			//功能
			var gn ="";
			for(var g in obj.function){
//				alert(obj.function[g].content);
				gn+="<h3>"+obj.function[g].title+"</h3>"
			}
			var gn1="<ul>";
			for(var ccc in obj.function[g].content){
				gn1+="<li>"+obj.function[g].content[ccc].p+"</li>"
			}
			gn1+="</ul>";
			
			$("#gongneng").html(gn)
			$("#gongneng").append(gn1)
			
			//规格
			var gg ="";
			for(var gui in obj.parameter){
				gg+="<h3>"+obj.parameter[gui].title+"</h3>"
			}
			var gg1 ="<ul id='ul2'>";
			for(var ggg in obj.parameter[gui].content){
				gg1+="<li>"+obj.parameter[gui].content[ggg].p+"</li>"
			}
			gg ="</ul>"
			$("#guige").html(gg)
			$("#gongneng").append(gg1)
			
			//跳转
			var t="";
			for(var tt in obj.tiao){
				t+="<a href=''>"+obj.tiao[tt].shang+"</a><a href=''>"+obj.tiao[tt].xia+"</a>"
			}
			$("#tiao").html(t);


		},
		error: function() {
			alert("网络错误");
		}
	});
})(Zepto)