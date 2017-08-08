(function(doc){
	function changeSize(){
		var size=doc.documentElement.clientWidth/320*10;
		doc.querySelector('html').style.fontSize=size+'px';
	}
	//用户缩放浏览器窗口大小时
	window.onresize=changeSize;
	changeSize();
})(document);