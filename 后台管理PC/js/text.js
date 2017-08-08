var da;
$.ajax({
    dataType:"json",
    url:"data/text.json",
    success:function(e){
        da=e
        var zong="";
        for(var i in e){
            zong+="<div title='"+e[i].menuId+"'><img src='img/"+e[i].img+"'><span>"+e[i].menuName+"</span></div><ul></ul>"
        }
        $("#left").html(zong)
    }
})
$("#left").on("click","div",function(){
    //判断
    console.log($(this).next().css("display"));
    if($(this).next().hasClass('active')){
        $(this).next().slideDown();
        $(this).next().removeClass('active')
    }else{
        $(this).next().slideUp()
        $(this).next().addClass('active')
    }
    //点击一级渲染数据二级
    var er="";
    var title=$(this).prop("title")
    for(var i in da){
        var list=da[i].children
        for(var j in list){
            if(title==list[j].parentId){
                er+="<li title='"+list[j].menuId+"'><img src='img/"+list[j].img+"'><span>"+list[j].menuName+"</span><ol></ol></li>"
            }
        }
    }
    $(this).next().html(er);


    $("ul>li").on("click",function(){
        if($(this).find("ol").css("display")!="none"){
            $(this).find("ol").slideUp();
        }else{
            $(this).find("ol").slideDown()
        }
        var title=$(this).prop("title");
        var san="";
//
        var list9=da[0].children[0].children[0]
//        for(var k in da){
//            var list=da[k].children
//        }
        if(title==da[0].children[0].menuId){
            san+="<li><img src='img/"+list9.img+"'><span>"+list9.menuName+"</span></li>"
        }
        $(this).find("ol").html(san)
//
    })
})
$(".li4").click(function(){
    $(".denglu").show()
})
$(".qvxiao").click(function(){
    $(".denglu").hide()
})
$(".queding").click(function(){
    var yh=$("#yh").val();
    var mima=$("#mima").val();
    $(".denglu").hide()
    $(".li4").html('退出')
    $(".li3").html("你好,"+yh)
//        localStorage.setItem(html,yh);
})

var but = document.getElementById('button');
var input1 =  document.getElementById('true');
var input2 =  document.getElementById('false');
var input3 = document.getElementById('yh');
var input4 =  document.getElementById('mima');
var keywords = [];
input1.onclick = function(){
    var value =input3.value;
    var value1 = input4.value;
    keywords.push(value);
    keywords.push(value1);
    var jsonStr = JSON.stringify(keywords);
    localStorage.setItem('keywords', jsonStr);
}
but.onclick =function(){
    var keywordsStr = localStorage.getItem('keywords');
    var keywords = JSON.parse(keywordsStr);
    if(keywordsStr!==null){
        alert("登录成功")
    }else{
        alert("请登录")
        $('.denglu').show()
    }
}
