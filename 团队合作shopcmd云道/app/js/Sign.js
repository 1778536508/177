$(function($){
	$("button").on('click',function(){
		if(localStorage.getItem(name)==$("#user").val()){
			$(".error").text('用户不存在')
		}else if(localStorage.getItem(password)!=$("#pass").val()){
			$(".error").text('账户或密码错误')
		}else{
			$(".error").text('')	
		}
		console.log(localStorage.getItem(arr))
	})
})