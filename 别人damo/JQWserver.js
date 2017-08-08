//搭建服务器
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');

var haha = http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
	var urll = url.parse(req.url).pathname;
	var mo = req.method;
	if(mo=='GET'){
		switch (urll){
			case "/capacity":dd('./data/capacity.json',res)
				break;
			case "/help":dd('./data/help.json',res)
				break;
			case "/home":dd('./data/home.json',res)
				break;
			case "/introduce":dd('./data/introduce.json',res)
				break;
			case "/termOfService":dd('./data/termOfService.json',res)
				break;
			default:
				break;
		}
	}else{
		switch (urll){
			case "/cc":testt(req,res);
				break;
			default:
				break;
		}
	}
})
haha.listen(8887);


function dd(url,res){
	fs.readFile(url,'utf-8',function(err,data){
		if(!err){
			res.end(data);
		}
	})
}
function testt(req,res){
	var obj = url.parse(req.url).query;
	console.log(req.url);
	var data=qs.parse(obj);
	res.end(data.usee+' 哈哈');
}

