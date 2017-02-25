var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserInfo = new Schema({
    fb_id : {
		type: String , 
		unique: true ,
		required: true
	},
    cust_id : {
        type: String , 
		required: true
    }
});

module.exports = mongoose.model('UserInfo',UserInfo);