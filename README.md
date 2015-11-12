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

 What we've done with these three lines of code is simply have the server start listening for requests. Type in ```$ node beginner_server.js``` into your command line to start the server and then navigate to localhost:8888 in your browser to see what's happening. So as you can see, the page just says "Cannot GET". 
























