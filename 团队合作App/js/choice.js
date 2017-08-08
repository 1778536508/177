/**
 * Created by Administrator on 2017/5/12.
 */
(function(doc){
    function changeSize(){
        var size=doc.documentElement.clientWidth/320*10;
        doc.querySelector('html').style.fontSize=size+'px';
    }
    //用户缩放浏览器窗口大小时
    window.onresize=changeSize;
    changeSize();
})(document);

// 获取当前时间
var time=new Date();
// 获取月份
var month=time.getMonth()+1;
// 获取某月份的日期
var date=time.getDate();
//获取当前星期
var day=time.getDay();
// alert(days[day])
var index=0;
var ul=document.createElement('ul');
var input=document.createElement('input');
input.setAttribute('type','date');
input.innerHTML='';

var br=document.createElement('br');
var li = new Array(6);
    for(var i=0;i<li.length;i++){
       li[i]=document.createElement('li');
    }

	var date1=date+1;
    var date2=date+2;
    var date3=date+3;
    var date4=date+4;

var timer=['零','周一','周二','周三','周四','周五','周六','周日'];
var mon=[0,'0'+1,'0'+2,'0'+3,'0'+4,'0'+5,'0'+6,'0'+7,'0'+8,'0'+9,10,11,12];
var arr=new Array();
for(var i=0;i<=4;i++){
    index++;
    var days=day+index;

    if(days>=7){
        day=0;
        index=1;
    }
     week = timer[days];
        arr.push(week);
   console.log(arr);
}



  	li[0].innerHTML=mon[month]+'-'+date+'</br>今天';
    li[1].innerHTML=mon[month]+'-'+date1+'</br>'+arr[0];
    li[1].setAttribute('class','on');
    li[2].innerHTML=mon[month]+'-'+date2+'</br>'+arr[1];
    li[3].innerHTML=mon[month]+'-'+date3+'</br>'+arr[2];
    li[4].innerHTML=mon[month]+'-'+date4+'</br>'+arr[3];
    li[5].appendChild(input);

    
     input.onchange=function(){
        
            var val=input.value;
             val=val.split('-');
        li[1].innerHTML=val[1]+'-'+val[2]+'</br>'+arr[0];
   
    }




li[5].setAttribute('class','')
    for(var i=0;i<5;i++){
        li[i].onclick=function(){
        this.setAttribute('class','on')
            this.nextSibling.setAttribute('class','')
            this.previousSibling.setAttribute('class','')    
            
        }
    
    }

    for(var i=0;i<6;i++){
        ul.appendChild(li[i])
    }

document.getElementById("section").appendChild(ul);




$(function($){

    $.ajax({
        url:"http://127.0.0.1:4000",
        success:function(e){
        var data=JSON.parse(e)

        var list='<div>'
        for(var a in data){
        list='<dl><dt><img src="'+data[a].img+'" alt=""></dt><dd>'+
            '<span></span><span>'+data[a].name+'</span><br><span class="fa fa-fw fa-star"></span>'+
            '<span class="fa fa-fw fa-star"></span><span class="fa fa-fw fa-star"></span>'+
            '<span class="fa fa-fw fa-star"></span><span class="fa fa-fw fa-star"></span>'+
            '<span class="fa">5分</span><br><span class="text">'+data[a].address+'</span>'+
            '<span class="text">'+data[a].distance+'</span></dd></dl>'+
            '<p>'+data[a].guidance+'</p><ul>'

            for(var i in data[a].time){
             list+='<li><span>'+data[a].time[i].hour+'</span><span>'+data[a].time[i].price+'</span><span>提交</span></li>'   
            }
            list+='</ul>'

            
        }
        list+='</div>'
         $('.content').html(list)
        
        }
    })
  
})

