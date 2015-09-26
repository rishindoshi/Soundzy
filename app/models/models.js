var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	username: String,
	password: String
});

//Create new model called 'User' that uses the User schema defined above
mongoose.model("User", User);