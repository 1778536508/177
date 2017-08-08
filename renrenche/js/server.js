var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req,res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    fs.readFile("../data/index.json","utf-8",function (err,data) {
        if(!err){
            res.end(data)
        }
    })
});
server.listen(3000);