$(function($){
	$.ajax({
		type: "get",
		url: "data/data.json",
		async: true,
		success: function(obj) {
//			var obj = JSON.parse(o);
//			console.log(obj)
			var str = obj.title;
			var sp = obj.shop;
			var js = obj.jiesuan;
			
			var bt="<li>";
			for(var t in str){
				bt+="<p><strong>"+str[t].p+"</strong></p>"
			}
			bt+="</li>";
			$("#shuju").html(bt);
			
			
			var sp1 ="<li>";
			for(var s in sp){
				sp1+="<p>"+sp[s].id+"</p>";
				sp1+="<p>"+sp[s].name+"</p>";
				sp1+="<p>"+sp[s].many+"<input type='text' name='price' value='62.00'></p>";
				sp1+="<p><input type='button' name='minus' value='-' onclick='minus("+sp[s].index+");'><input type='text' name='amount' value='0'><input type='button' name='plus' value='+' onclick='plus("+sp[s].index+");'></p>";
				sp1+="<p id='"+sp[s].bian+"'>"+sp[s].price+"</p>";
				sp1+="<p><button onclick='coo();'>"+sp[s].button+"</button></p>";
				sp1+="</li><li>"
				
			}
			sp1+="</li>";
			$("#shuju").append(sp1);
			
			//var jie ="";
			//for(var j in js){
			//	jie+="<li id='totalPrice'>"+js[j].jia+"</li>";
			//	jie+="<li id='settlement'><span id='but'>"+js[j].zi+"</span></li>"
			//}
			//$("#suan").html(jie);
			
		}
				
	});
})

