

var app = angular.module("Myname",[]);
app.controller("name",function($scope,$http){
	$http.get("data/choice.json").success(function(res){
		$scope.data = res.shop;
		console.log($scope.data);
		$scope.ion = res.icon;
		console.log($scope.ion);
		$scope.str = res.conten;
		console.log($scope.str);
	})
	
	
	
	
	
	
	
	$(function($){
		//获取时间
		var time = new Date();
		//获取当前月份
		var yue = time.getMonth();
		//获取当前日分
		var ri = time.getDate();
//		alert(ri);
		//获取星期
		var week = time.getDay();
//		console.log(week);
		
		//创建月份数组
		var yuearr = ["01","02","03","04","05","06","07","08","09","10","11","12"];
		//创建星期数组
		var weekarr = ['周一','周二','周三','周四','周五','周六','周日'];
		
		
		
		
		var index=0;
		var ul = "<ul id='pics'>";
		for(var i=0;i<10;i++){
			index++;
			var rrd = ri+index-3;

			ul+="<li><p>"+yuearr[yue]+"-"+rrd+"</p><p>"+weekarr[week-1]+"</p></li>";
		}
		ul+="</ul>";
		console.log(ul);
		
		$("#date").html(ul);




		











		
		
		
		//滑动时间
		var pics = $("#pics"),
			width = $(window).width(),
			index = 0;
		pics.swipeLeft(function(){
			set();
		})
		pics.swipeRight(function(){
			arr();
		})
		function set(){
			index++;
			if(index>1){
				index=1;
			}
			server(index);
		}
		function arr(){
			index--;
			if(index<0){
				index=0;
			}
			server(index);
		}
		function server(index){
			var s = "-"+index*50+"%";
			pics.css({
				"-webkit-transform":"translateX("+s+")",
				"-webkit-transition":"all 1s"
			})
		}
		
		
	})
	
	
	
	
	
	
	
})