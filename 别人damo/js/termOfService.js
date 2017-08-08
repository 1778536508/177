;(function($){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:8887/termOfService",
		async:true,
		dataType:'json',
		success:function(e){
			str="";
			for(var i in e.data){
				str+='<dt>'+e.data[i].title+'</dt>';
				for(var j in e.data[i].titleListCon){
					str+='<dd>'+e.data[i].titleListCon[j]+'</dd>';
				}
			}
			str+='<p>'+e.end+'</p>'
			$('#fc-termOfService-content').append(str);
		}
	})
})(jQuery)