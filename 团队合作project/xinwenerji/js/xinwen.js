$.ajax({
    dataType:"json",
    url:"data/xinwen.json",
    success:function(data){
        var str="";
        str+="<header>"+data.biaoti+"</header>";
        $("#header").html(str)
        var nr="";
        var list=data.content
        for(var i in list){
            if(list[i].class){
                nr+="<li class='"+list[i].class+"'><p>"+list[i].yi+"</p><p>"+list[i].er+"</p><p>"+list[i].san+"</p></li>"
            }else{
                nr+="<li><p>"+list[i].yi+"</p><p>"+list[i].er+"</p><p>"+list[i].san+"</p></li>"
            }
        }
        $("#xinwen>ul").html(nr)
    }
})
