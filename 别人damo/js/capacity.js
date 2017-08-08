;(function($){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:8887/capacity",
		async:true,
		dataType:'JSON',
		success:function(e){
			console.log(e);
			
			var str='';
			//1
            str+='<div class="j-ruanjian-h">'+e[0].title+'</div><ul class="clearfix h-border">';
			for(var i in e[0].content){
                str+='<li><div><img src="'+e[0].content[i].imgsrc+'"/><p>'+e[0].content[i].txt+'</p></div></li>'
			}
			str+='</ul>';
			//2
			str+='<div class="j-ruanjian-h1">'+e[1].title+'</div><ul class="clearfix h-border">'
			for(var i in e[1].content){
                str+='<li><div><img src="'+e[1].content[i].imgsrc+'"/><p>'+e[1].content[i].txt+'</p></div></li>'
			}
			str+='</ul>';
			//3
			str+='<div class="j-ruanjian-h1">'+e[2].title+'</div><div id="h-map" class="clearfix">'
                for(var i in e[2].content){
	                str+='<div>'
	                    +'<img src="'+e[2].content[i].imgsrc+'"/>'
	                    +'<p>'+e[2].content[i].title+'</p>'
	                    +'<p class="j-p">'+e[2].content[i].txt+'</p>'
	                +'</div>'
                }
            str+='</div>';
			$('#h-con').html(str);
		}
	});
})(jQuery)
