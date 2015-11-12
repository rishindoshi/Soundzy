//we are using a library for node called express.
//you can think of 'require' as the '#include' for node.js
var app = require('express')();

//Have the app listen for requests on port 8888
app.listen(8888);
console.log("Server magic happens on port 8888");
