var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount; //当前剩余秒数
var num = 0;
function sendMessage() {
	curCount = count;
	// 设置button效果，开始计时
	document.getElementById("btnSendCode").setAttribute("disabled", "true"); //设置按钮为禁用状态
	document.getElementById("btnSendCode").value = "请在" + curCount + "后再次获取"; //更改按钮文字
	InterValObj = window.setInterval(SetRemainTime, 1000); // 启动计时器timer处理函数，1秒执行一次
	// 向后台发送处理数据
	var phone = $("#phone").val();
//		num = parseInt(Math.random()*10000);
	$.ajax({
		type: "POST", // 用POST方式传输
		dataType: "jsonp", // 数据格式:JSONP 做跨域
		url: "http://106.ihuyi.com/webservice/sms.php?method=Submit", // 目标地址
		data: {//像后台传输数据   有你的用户名和密码 还有手机号  内容 
			"account":"C32995437",
			"password":"b8b32e643214011dc359888b56c1ea53",
			"mobile":phone,
			"content":"您的验证码是：1234。请不要把验证码泄露给其他人。",
			"format":"json"
		},
		success: function(data) {
			data = parseInt(data, 10);
			if(data == 1) {
				$("#jbPhoneTip").html("<font color='#339933'>√ 短信验证码已发到您的手机,请查收</font>");
			} else if(data == 0) {
				$("#jbPhoneTip").html("<font color='red'>× 短信验证码发送失败，请重新发送</font>");
			}
		}
	});
}

//timer处理函数
function SetRemainTime() {
	if(curCount == 0) {
		window.clearInterval(InterValObj); // 停止计时器
		document.getElementById("btnSendCode").removeAttribute("disabled"); //移除禁用状态改为可用
		document.getElementById("btnSendCode").value = "重新发送验证码";
	} else {
		curCount--;
		document.getElementById("btnSendCode").value = "请在" + curCount + "秒后再次获取";
	}
}
//验证短信验证码
function doCompare() {
	var codelast = document.getElementById("codelast").value; //获取输入的验证码
	if(codelast == null || codelast == '') {
		alert("验证码不能为空！");
	} else if(codelast == 1234) {
		alert("验证码正确");		
	}
}
