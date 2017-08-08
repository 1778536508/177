//删除

function coo() {
	var flag = confirm("您确定要收藏商品吗?");
	if(flag == true) {
//		var ev = ev || window.event;
//		var target = ev.target || ev.srcElement;
//		if(target.tagName.toLowerCase() == 'button') {
//			var tr = target.parentNode.parentNode;
//			tr.parentNode.removeChild(tr);
//		}
		alert("收藏成功!");
	}

}

function accounts() {
	var li4=$(".li4").html()
	if(li4=="登录"){
		$(".denglu").show()
	}else{
		alert("OK,您的订单已提交");
	}

}
//减
function minus(num) {
	var prices = document.getElementsByName("price")[1].value;
	var count = parseInt(document.getElementsByName("amount")[num].value) - 1;
	if(count < 0) {
		alert("不能再减了，再减就没有啦！");
	} else {
		document.getElementsByName("amount")[num].value = count;
		var totals = parseFloat(prices * count);
		document.getElementById("price" + num).innerHTML = "¥" + totals;
		total();
	}
}

function plus(num) {
	var prices = document.getElementsByName("price")[num].value;
	var count = parseInt(document.getElementsByName("amount")[num].value) + 1;
	document.getElementsByName("amount")[num].value = count;
	var totals = parseFloat(prices * count);
	document.getElementById("price" + num).innerHTML = "¥" + totals;
	total();
}

function total() {
	var prices = document.getElementsByName("price");
	var count = document.getElementsByName("amount");
	var sum = 0;
	for(var i = 0; i < prices.length; i++) {
		sum += prices[i].value * count[i].value;
	}
	document.getElementById("totalPrice").innerHTML = "¥" + sum;
}
total();