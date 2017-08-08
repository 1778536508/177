

app.controller("myCtrl3",function($scope,$http){
    $http.get("che/data/data.json").success(function(response){
            $scope.res = response;
            console.log(response)
        })
});
