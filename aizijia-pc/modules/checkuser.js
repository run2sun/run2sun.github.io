var fs = require("fs");
var addData = function(url,option){
	fs.readFile(url,"utf8",function(err,data){
		var userlist = JSON.parse(data);
		userlist.push(option);
		var jsonString = JSON.stringify(userlist,null,4);
		fs.writeFile(url,jsonString);
		console.log("数据添加成功！");
	})
}

var checkuser = function (opi,next){
	fs.readFile("../data/userlist.json","utf8",function(err,data){
		var userlist = JSON.parse(data);
		for(var i in userlist){
			if(userlist[i].username == opi.username){
				next(false);
				return;
			}
		}
		next(true);
	})
}


module.exports = {checkuser:checkuser,
				  addData:addData,
				}