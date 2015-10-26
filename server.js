process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Start the server
var app = require('./app/express.js')();
app.listen(3000);
console.log('Server magic happens at port 3000');
