/**
 * Created by Administrator on 2017/5/23.
 */
app.controller('myCtrl1',function ($scope,$http) {
    $http.get('che/data/vehicle.json').success(function (data) {
        $scope.data=data.data
    })

    $(function ($) {
        $("section").on('click','a',function () {
            if( $("."+$(this).attr('title')).css('display')=='none'){
                $(this).addClass('paixu').siblings().removeClass('paixu')
                $("."+$(this).attr('title')).css('display','block')
                $("#active").css("display",'block')
            }else if($("."+$(this).attr('title')).css('display')=='block'){
                $(this).removeClass('paixu')
                $("."+$(this).attr('title')).css('display','none')
                $("#active").css("display",'none')
            }
        })
        $(".zhineng").on('click','a',function () {
            $(this).addClass('active').siblings().removeClass('active')
        })
    })
})