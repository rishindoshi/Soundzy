# Soundzy

## For Mac Users

1. We'll first need to download Node.js and npm, which is Node's package manager.

2. To get Node and npm, we'll run the command:
```
brew install node
```

3. What's Homebrew? Well they describe themselves as the "package manager that installs stuff that Apple didnt". To install Homebrew run:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## For Windows Users

1. Get a Mac.

2. Follow above instructions for Macs.

## Onto the App

We're going to analyze and discuss each element of our app to understand how it all works together. Then we'll start building on top of it together.


#### Da Server

This is the backbone of the app and is unsurprisingly written in the file server.js. What's the job of a server? A server's job is to always be listening for "requests". Once the server receives a request, its job is to then send a "response" that includes the data that was requested. Your web browsers (Chrome, Firefox, etc.) are usually the ones making these requests.

Take for example typing in "www.espn.com" into your browser. When you do this, your browser will send a request to an ESPN server. The ESPN server will then process this request and send back the webpage that you requested in its response. Pretty straightforward, no? If not, these concepts will hopefully become more clear as we write our server together.

```javascript
var express = require('express')();

app.listen(8888);
console.log("Server magic happens on port 8888");
```

Here we essentially #include a library called Express. Express is a library that takes away all the nasty details of writing an actual server. It contains convenient functions for us such as the app.listen(portnum) function. This function starts the server and makes it listen for requests on port 8888 of the machine. Here we tell Express to start a server for us and to listen for requests on port 8888. Console.log is the javascript version of cout. 

```javascript
app.get('/', function(req, res){
	res.render('home');
});
```

Now here comes the meat of the app. We're setting a function here that will be called when a request comes into our server. The ```app.get()``` 

















