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

 What we've done with these three lines of code is simply have the server start listening for requests. Type ```$ node beginner_server.js``` into your command line to start the server and then navigate to ```localhost:8888``` from your browser to see what's happening. ```localhost``` is the domain that is used to test a server **locally**. This means that only you can submit requests to this server from your own computer. Now once you buy the domain www.soundzy.com, you can then have users from everywhere start accessing the app.

 So as you can see, the page just says "Cannot GET". So what happened here? Typing ```localhost:8888``` into your browser caused your browser to submit a GET request to the node server, but so far we've only written the code to listen for requests. We never wrote any code to process requests and respond to them. 
























