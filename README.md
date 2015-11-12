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

#### The Beginner Node Server

So what's the job of a server? A server is essentially just a program running on a computer that is constantly "listening" for requests. When you type in "www.spotify.com" into your browser, your browser will submit a "request" to a Spotify server. This server receives the request, processes it, and sends a "response" back to your browser that contains the data for the home webpage of Spotify (HTML). This request/response system is the core of the Web. Let's dive into the code now.

```javascript
//we are using a library for node called express.
//you can think of 'require' as the '#include' for node.js
var app = require('express')();

app.listen(8888);
console.log("Server magic happens at localhost:8888");
```

 What we've done with these three lines of code is simply have the server start listening for requests. Type `$ node beginner_server.js` into your command line to start the server and then navigate to `localhost:8888` from your browser to see what's happening. `localhost` is the domain that is used to test a server **locally**. This means that only you can submit requests to this server from your own computer. Now once you buy the domain www.soundzy.com, you can then have users from everywhere start accessing the app.

 So as you can see, the page just says "Cannot GET". So what happened here? Typing `localhost:8888` into your browser caused your browser to submit a GET request to the node server, but so far we've only written the code to listen for requests. We never wrote any code to process requests and respond to them.

 ```javascript
var app = require('express')();

app.get('/', function(req, res){
	console.log('REQUEST RECEIVED');
	res.send('WHADDUP YALL');
});

app.listen(8888);
console.log("Server magic happens at localhost:8888");
```

We're using the `app.get()` function that Express provides for us. It takes in two paramters:

1. The path that specifies which webpage we want. "/" is like a default and means home page
2. A function (functions are variables in JS unlike C++) that is going to be run when a request is submitted to the above path

So now when we start the server and navigate to `localhost:8888`, our browser will submit the same request as it did before. But this time, we've set up a **route handler** that handles requests sent to the home page (denoted by "/") and sends a quick WHADDUP back to the browser. Our app is going to have two **routes**. One will be the homepage which will eventually prompt a user to input an artist name, and the other will be a tracks page, which will display the top ten tracks for the given artist name. For now, let's set up a tracks route that simply responds with a message. We'll get into the details later.

```javascript
app.get('/tracks', function(req, res){
	res.send('WHADDUP TRACKS');
});
```

Pretty much the same code as the homepage route. This time, we specified a different path and sent back a different message. Start the server again and navigate to `localhost:8888/tracks` to test the code. The browser will again send a request to our sever, but a different **route handler** will be called this time to match the "/tracks" path.

#### Slightly more complex server

// Your text here

#### Getting data from Spotify API

// Your text here

#### Rendering Data on the front end

// Your text here























