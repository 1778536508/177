/**
 * Created by Administrator on 2017/5/24.
 */

    app.controller("myapp2",function($scope,$http){
        $http({method:"get",url:"che/data/text2.json"}).
        success(function(data){
            //历史
            $scope.list=data.lishi
            $scope.ul=data.lishi.ul
            //热门
            $scope.list1=data.remen
            $scope.ul1=data.remen.ul
            //标题
            $scope.list2=data.a
        })
    })