;(function($){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:8887/introduce",
		async:true,
		dataType:'JSON',
		success:function(e){
//			console.log(e);
			//1
			var str = '<div class="t-box"><p class="t-title">'+e.title+'</p><div class="t-list">'
			
			
			for(var i in e.content){
				str+='<p>'+e.content[i]+'</p>'
			}
			str+='</div>';
			//2
			str+='<ul class="t-menu clearfix">';
				
			for(var i in e.img){
				str+='<li><img src="'+e.img[i].imgsrc+'"/><p>'+e.img[i].txt+'</p></li>';
			}
			str+='</ul></div>'
			
			$('#t-box').prepend(str);
			
			//3
			str = ''
			str+='<div class="t-hot"><div class="t-list1"><div class="t-msg">'+e.list1.title+'</div><ul>'
			for(var i in e.list1.content){
				str+='<li>'+e.list1.content[i].msg+e.list1.content[i].content+'</li>';		
			}
			str+='</ul></div></div>';
			$('#t-box').append(str);
			
			
			//4
			
			str = '<div class="t-list2"><div class="t-msg">'+e.list2.title+'</div><ul>'
			for(var i in e.list2.content){
				str+='<li>'+e.list2.content[i].msg+'<div>'+e.list2.content[i].content+'</div></li>';
			}
			str+='</ul></div>'
			$('#t-box').append(str);
			
			
			//5
			str='<div class="t-hot"><div class="t-list1"><div class="t-msg">'+e.list3.title+'</div><ul class="t-ul">';
			for(var i in e.list3.content){
				str+='<li>'+e.list3.content[i].msg+'<span>'+e.list3.content[i].content+'</span></li>';
			}
			str+='</ul></div></div>';
			$('#t-box').append(str);
		}
	});
})(jQuery)