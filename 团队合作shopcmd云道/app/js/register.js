/**
 * Created by Administrator on 2017/5/15.
 */
$(function ($) {




    var arr=[]

    // 账号名验证
    var reg=/\w{0,8}/
    $("#name").on('blur',function () {

        if($("#name").val()==""){
            $(this).siblings('.errors').show().children('.text').text('请输入账号').siblings('.close').text('x').css('background','#FF3F13')
            return false;
        };
        
        if(reg.test($("#name").val())){
            $(this).siblings('.errors').show().children('.close').text('√').css('background','#8FDB34')
                .siblings('.text').text('')
        }
        localStorage.setItem("name",$("#name").val())   
    })

    


    // 密码验证
    var reg2=/[A-Za-z0-9]{6,16}/
    $("#password").on('blur',function () {
        if($("#password").val()==""){
            $(this).siblings('.errors').show().children('.text').text('请输入6-16位数字或者字母').siblings('.close').text('x').css('background','#FF3F13')
            return false;
        }else if(reg2.test($("#password").val())){
            $(this).siblings('.errors').show().children('.close').text('√').css('background','#8FDB34')
                .siblings('.text').text('')
        }else{
            $(this).siblings('.errors').show().children('.text').text('请输入6-16位数字或者字母').siblings('.close').text('x').css('background','#FF3F13')
        }
    })
    // 确认密码
    $("#confirm").on('blur',function () {
        if($("#confirm").val()==""){
            $(this).siblings('.errors').show().children('.text').text('请再次输入密码').siblings('.close').text('x').css('background','#FF3F13')
            return false;

        }else if($("#confirm").val()!=$("#password").val()){
            $(this).siblings('.errors').show().children('.text').text('密码上下不一致').siblings('.close').text('x').css('background','#FF3F13')
            return false;

        }else if($("#confirm").val()==$("#password").val()){
            $(this).siblings('.errors').show().children('.close').text('√').css('background','#8FDB34')
                .siblings('.text').text('')
        }

        localStorage.setItem("password",$("#confirm").val())
    })


    //新密码
     $("#new").on('blur',function () {
        if($("#new").val()==""){
            $(this).siblings('.errors').show().children('.text').text('请输入6-16位数字或者字母').siblings('.close').text('x').css('background','#FF3F13')
            return false;
            index=false
        }else if(reg2.test($("#new").val())){
            $(this).siblings('.errors').show().children('.close').text('√').css('background','#8FDB34')
                .siblings('.text').text('')
                index=true
        }else{
            $(this).siblings('.errors').show().children('.text').text('请输入6-16位数字或者字母').siblings('.close').text('x').css('background','#FF3F13')
            index=false
        }
    })


    // 公司名称
    $("#company").siblings('.errors').show().children('.close').text('√').css('background','#8FDB34')
        .siblings('.text').text('')

    // 联系人
    $("#contacts").on('blur',function () {
        if($("#contacts").val()==""){
            $(this).siblings('.errors').show().children('.text').text('请输入联系人').siblings('.close').text('x').css('background','#FF3F13')
            return false;
        }else{
            $(this).siblings('.errors').show().children('.close').text('√').css('background','#8FDB34')
                .siblings('.text').text('')
        }
    })

    // 所在区域
    $("#city").on('blur',function () {

        if($("#city").val().length>=5){
            $(this).siblings('.errors').show().children('.text').text('请选择所在区域').siblings('.close').text('x').css('background','#FF3F13')
            return false;
        }else{
            $(this).siblings('.errors').show().children('.close').text('√').css('background','#8FDB34')
                .siblings('.text').text('')
        }
    })

    // 验证手机
    var reg3=/^1[3,5,7,8]\d{9}$/
    $("#phone").on('blur',function () {

        if($("#phone").val()==''){
            $(this).siblings('.errors').show().children('.text').text('请输入手机号').siblings('.close').text('x').css('background','#FF3F13')
            return false;
        }else if(!reg3.test($("#phone").val())){
              $(this).siblings('.errors').show().children('.text').text('号码错误').siblings('.close').text('x').css('background','#FF3F13')
              return false;
        }
    
        else{
            $(this).siblings('.errors').show().children('.close').text('√').css('background','#8FDB34')
                .siblings('.text').text('')
        }
        localStorage.setItem("phone",$("#phone").val())

    })

        $("#change").on('click',function(){
            $("#num").text(parseInt(Math.random()*(10000-1000)+1000))
        })

        $("#code").on('blur',function(){
            if($("#code").val()==''){
                 $(this).siblings('.errors').show().children('.text').text('验证码不能为空').siblings('.close').text('x').css('background','#FF3F13')
                 return false;
            }
            if($("#code").val()!=$("#num").text()){
                $(this).siblings('.errors').show().children('.text').text('验证码错误').siblings('.close').text('x').css('background','#FF3F13')
                return false;
            }else{
                 $(this).siblings('.errors').show().children('.close').text('√').css('background','#8FDB34')
                .siblings('.text').text('')
            }
        })


        $("#btn").on('click',function(){
            $("input").val('')       
        })
        

    $("#user").val($("#name").val())
    
    $("#sign").on('click',function(){
           
        if(localStorage.getItem("name")!=$("#user").val()){   
            $("#error").show().text('用户不存在')
        }
        else if(localStorage.getItem("password")!=$("#pass").val()){
            $(".error").text('账户或密码错误')
        }
        else{
            $(".error").hide().text('')    
        }
        

    })
    

})