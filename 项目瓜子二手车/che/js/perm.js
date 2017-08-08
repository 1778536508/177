/**
 * Created by Administrator on 2017/5/24.
 */
app.controller("name1",function($scope,$http){
    $http.get("che/data/perm.json").success(function(req){
        $scope.data = req.banner;
        console.log($scope.data);
    })
})