var fs = require("fs");

function checkaddress(opi,next){
	fs.readFile("data/userlist.json","utf8",function(err,data){
			var userlist = JSON.parse(data);
			for(var i in userlist){
				if(userlist[i].address == opi.address && userlist[i].password == opi.password){
					
					next(true);
					return;
				}
			}
			next(false);
		})
}

module.exports = checkaddress;