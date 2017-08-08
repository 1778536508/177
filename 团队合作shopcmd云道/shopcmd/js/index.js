;(function($){
	var banner=$("#banner"),
	    pics=$("#pics"),
	    len=pics.children().size();
	    liwidth=$("#pics>li").width();
	    index=0;
	    var ins=setInterval(go,2000);
	   function go () {
	   	index++;
	   	if(index>len-1){
	   		index=0;
	   	}
	   	set(index);
	   }
	   function goto () {
	   	index--;
	   	if(index<0){
	   		index=len-1;
	   	}
	   	set(index);
	   }
	
	function set(index) {
		var s=index*liwidth+"px";
		pics.css({"-webkit-transform":"translateX(-"+s+")","-webkit-transition":"all 1s"});
	}

})(Zepto);
