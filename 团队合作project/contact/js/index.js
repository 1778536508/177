/**
 * Created by Administrator on 2017/5/11.
 */
$.ajax({
    url:"data/index.json",
    success:function (data) {
        //var data=JSON.parse(e)
        var  list=' <div class="map">'+data.title+'</div>'+
                '<ul><li>'+data.text+'</li><br><li>'+data.content+'</li>'
        for(var i in data.type){

            if(data.type[i].email==""){
                list+='<li>'+data.type[i].name+'<br>'+
                    data.type[i].address +'<br>'+
                    data.type[i].tel +'<br>'+
                   '</li>'
            }else{
                list+='<li>'+data.type[i].name+'<br>'+
                    data.type[i].address +'<br>'+
                    data.type[i].email +'<br>'+
                    data.type[i].tel +'<br>'+
                    data.type[i].fax +'</li>'
            }
        }
        list+='</ul>'
        $(".content").html(list)
    }
})