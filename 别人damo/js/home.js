;(function($){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:8887/home",
		async:true,
		dataType:'JSON',
		success:function(e){
			console.log(e);
			var str = '';
			str+='<p class="c-inter-title">'+e.title+'</p>'
				+'<ul class="c-inter-list clearfix">';
			for(var i in e.capacity){
				str+='<li><a href="#"><img src="'+e.capacity[i].imgsrc+'"/><p>'+e.capacity[i].title+'</p></a></li>'
			}
			str+'</ul><a href="#" class="c-posi">'+e.more+'>></a>'
			$('#c-zhineng').html(str);
		}
	});
})(jQuery)
