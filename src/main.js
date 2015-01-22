var express = require("express");
var bodyParser = require("body-parser");
var web = express();

web.use(bodyParser.urlencoded({ extended: true }))
web.use(express.static('stylesheet'));

var server;
var port = 3000;

//Need to do real DB
var DB = {
  user: "test",
  password: "test"
};

server = web.listen(port, function (){
  console.log("server running on port" + ' ' + port)
});

web.get('/', function (req,res){
  res.sendFile(__dirname + '/main.html');
});

web.post('/login', function (req,res){
  if(req.body.user == DB.user && req.body.password == DB.password){
    res.send("hello");
  }else{
    res.send("bye");
  }
});
