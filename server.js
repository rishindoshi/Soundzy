//Start the server
var app = require('./app/express.js')();
app.listen(8888);
console.log('Server magic happens at port 8888');
