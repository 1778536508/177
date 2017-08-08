

$.ajax({
	type:"get",
	url:"data/data.json",
	async:true,
	success:function(obj){
		//var obj = JSON.parse(e);
		console.log(obj);
		
		var ul = "";
		for(var i in obj){
			ul+="<ul class='"+obj[i].name+"'>";
			ul+="<li><a href=''>"+obj[i].text1+"</a></li>";
			ul+="<li><a href=''>"+obj[i].text2+"</a></li>";
			if(obj[i].class == true){
				ul+="<li class='tang'><a href=''>"+obj[i].text3+"</a></li>";
			}else{
				ul+="<li><a href=''>"+obj[i].text3+"</a></li>";
			}
			ul+="<li><a href=''>"+obj[i].text4+"</a></li>";
			ul+="<li><a href=''>"+obj[i].text5+"</a></li>";
			ul+="</ul>";		
		}
		$("#home").html(ul);
		
		
	}
});