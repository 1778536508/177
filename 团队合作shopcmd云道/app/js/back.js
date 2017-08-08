$(function($){
	$("#change").on('click',function(){
                $(".num").text(parseInt(Math.random()*(10000-1000)+1000))
        })
        $(".code").on('blur',function(){
            if($(".code").val()!=$(".num").val()){
                $(this).siblings('.errors').show().children('.text').text('验证码').siblings('.close').text('x').css('background','#FF3F13')
                return false;
            }else{
                 $(this).siblings('.errors').show().children('.close').text('√').css('background','#8FDB34')
                .siblings('.text').text('')
            }
        })

        var reg2=/[A-Za-z0-9]{6,16}/
    $("#new").on('blur',function () {
        if($("#new").val()==""){
            $(this).siblings('.errors').show().children('.text').text('请输入6-16位数字或者字母').siblings('.close').text('x').css('background','#FF3F13')
            return false;
        }else if(reg2.test($("#new").val())){
            $(this).siblings('.errors').show().children('.close').text('√').css('background','#8FDB34')
                .siblings('.text').text('')
        }else{
            $(this).siblings('.errors').show().children('.text').text('请输入6-16位数字或者字母').siblings('.close').text('x').css('background','#FF3F13')
        }
    })
})