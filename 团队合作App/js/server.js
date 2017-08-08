var http=require('http')
var fs=require('fs')
var server=http.createServer(function(req,res){
	fs.readFile('../data/choice.json','utf-8',function(err,data){
		res.setHeader('Access-Control-Allow-Origin','*')
		res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
		res.end(data)
	})
})
server.listen(4000)
