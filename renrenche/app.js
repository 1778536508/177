var app = angular.module("Myname",[]);
app.controller("name",function($scope,$http){
	$http.get("data/index.json").success(function(res){
		$scope.data = res.list;
		console.log($scope.data);
	})
	$http.get("data/title.json").success(function(req){
		$scope.cont = req.content;
		console.log($scope.cont);
	})
})
