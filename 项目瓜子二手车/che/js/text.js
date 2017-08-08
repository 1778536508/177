/**
 * Created by Administrator on 2017/5/24.
 */

    app.controller("myapp",function($scope,$http){
        $http({method:"get",url:"che/data/text.json"}).
        success(function(data){
            var str="<ul>";
            var list=data.a
            for(var i in list){
                if(list[i].div){
                    str+="<li><a href='#'>"+list[i].name+"</a><div>"+list[i].div+"</div></li>"
                }else{
                    str+="<li><a href='#'>"+list[i].name+"</a><span></span></li>"
                }
            }
            str+="</ul>"
            $(".body-a").html(str)
        })
    })
