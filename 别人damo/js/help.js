;(function($){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:8887/help",
		async:true,
		dataType:'json',
		success:function(e){
			for(var i in e.data){
//				console.log(e.data[i])
				$('#fc-help-content').append('<li>'+e.data[i].title+'<br />'+e.data[i].titleCon+'</li>');
			}
		}
	})
})(jQuery)
