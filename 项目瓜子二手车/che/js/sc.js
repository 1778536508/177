app.controller('scCar',function ($scope,$http) {
     $http.get("che/data/sj.json")
        .success(function (data) {
        	console.log(data);
        	$scope.tj=data.tuijian;
        })
});