var fs=require("fs");
var express=require("express");
var app=express();
app.use(express.static("public"));
app.listen(3000);

var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));

var checkuser=require("./modules/checkuser.js");
var checkaddress=require("./modules/checkaddress.js");


// app.post("/postdata",function(req,res){
// 	checkuser.checkuser({"username":req.body.username},function(result){
// 		res.send(result);
		
// 	})
// });

var result="";
app.post("/postdata",function(req,res){
	fs.readFile("data/userlist.json","utf8",function(err,data){
		var userlist=JSON.parse(data);
		 var result=true;
		for(var i in userlist){
			if(req.body.username==userlist[i].username){
			result=false;
			}	
		}
	res.send(result);
	})
})

app.post("/checkuser",function(req,res){
	checkuser.addData("data/userlist.json",req.body);
})



app.post("/log-in",function(req,res){
	checkaddress(req.body,function(result){
		if(result){
			// fs.readFile("data/user.json","utf8",function(err,data){
			// 	var userlist=JSON.parse(data);
			// 	res.render("user",{data:userlist});
			// })
			res.redirect("/person.html");
		}else{
			res.redirect("/tuan.html");
		}
		
	})
})
	
