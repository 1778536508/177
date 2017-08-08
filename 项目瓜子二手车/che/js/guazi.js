

app.controller("myCtrl2",function($scope,$http){
    $http.get("che/data/data2.json")
        .success(function(response){
            $scope.jilu = response.jilu;
            $scope.liucheng = response.liucheng;
            $scope.zhinan = response.zhinan
        });

    $(".zhinan").on("click","#cl",function(e){
        e.preventDefault()
        if($(this).parent().next().css("display")=="none"){
            $(this).removeClass("fa fa-angle-down").addClass("fa fa-angle-up");
            $(this).parent().next().show();
        }else{
            $(this).removeClass("fa fa-angle-up").addClass("fa fa-angle-down");
            $(this).parent().next().hide()
        }
    })
});


