function getPost(way,url,data,success){
	
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
    }else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
    
	if( way=='GET'){
		    oAjax.open('GET',url,true);
		    oAjax.send();
	}else{
			oAjax.open('POST',url,true);
			oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			oAjax.send(json2str(data));
	}
	
	
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState == 4){
			if(oAjax.status >=200 && oAjax.status<300 || oAjax.status == 340){
				success && success(oAjax.responseText);
			}
		}
	}
}

function json2str(json){
			json.t = Math.random();
			var arr = [];
			for(var name in json){
				arr.push(name+'='+json[name]);
			}
			return arr.join('&');
		}