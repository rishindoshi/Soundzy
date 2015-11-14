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

## Useful Links for this Tutorial

## Onto the App

#### The Beginner Node Server

So what's the job of a server? A server is essentially just a program running on a computer that is constantly **listening** for requests. When you type in "www.spotify.com" into your browser, your browser will submit a **request** to a Spotify server. This server receives the request, processes it, and sends a **response** back to your browser that contains the data for the home webpage of Spotify (HTML). This request/response system is central in understanding how the Web works. Let's dive into some code now.

```javascript
//we are using a library for node called express.
//you can think of 'require' as the '#include' for node.js
var app = require('express')();

app.listen(8888);
console.log("Server magic happens at localhost:8888");
```

 What we've done with these three lines of code is simply have our server start listening for requests. Type `$ node beginner_server.js` into your command line to start the server and then navigate to `localhost:8888` from your browser to see what's happening. `localhost` is the domain that is used to test a server **locally**. This means that only you can submit requests to this server from your own computer. Now if you were to buy the domain www.soundzy.com, you can then have users from everywhere start accessing the app.

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
We're using Express's `app.get()` function which will allow us to process incoming requests and respond to them. It takes in two paramters:

1. The path that specifies which webpage we want. "/" is like a default and means home page
2. A function (functions are variables in JS unlike C++) that is going to be run when a request that matches the above path is received

So now when we start the server and navigate to `localhost:8888`, our browser will submit the same request as it did before. But this time, `app.get()` allowed us to set up what is called a **route handler** that handles requests sent to the home page (denoted by "/") and sends a quick WHADDUP back to the browser. Our app is going to have two **routes**. One will be the homepage which will eventually prompt a user to input an artist name, and the other will be a tracks page, which will display the top ten tracks for the given artist name. For now, let's set up a tracks route that simply responds with a message.

```javascript
app.get('/tracks', function(req, res){
	res.send('WHADDUP TRACKS');
});
```

Pretty much the same code as the homepage route. This time, we specified a different path and sent back a different message. Start the server again and navigate to `localhost:8888/tracks` to test the code. So here are the steps that happen in a little more detail:

1. You type url into browser
2. Your browser sends request to the server
3. Express receives the request, parses the url, and matches it with the correct **route handler**
4. Express then calls the correct function we passed into app.get()

#### Sending Web Pages

Let's make some upgrades to our server. Previously we saw how the server in the client interact by sending messages back and forth. Now, instead of giving our visitors a message, lets present them with a full "web page". Now when we get a request, we will **serve** them our HTML web page.

If you are familar with HTML this should look fairly simple to you. HTML is a markup language that is used to represent visual structures in web browsers. What does that mean? When a web browser sees an HTML file, it is able to turn it into the visual structure you see on facebook.com or any other website.

Let's change our routes to serve our pre-made HTML files.

```javascript
var app = require('express')();
app.get('/', function(req, res){
	res.sendFile('example_home.html');
});
app.get('/tracks', function(req, res){
	var artist = req.query.artist;
	console.log(artist);
	res.sendFile('example_tracks.html');
});
app.listen(8888);
console.log("Server magic happens on port 8888");
```

Here we're using Express's `sendFile()` function which does exactly what is sounds like it does, sends the file.

Congrats! You now have a functioning web server that serves a static web page! A good majority of the web behaves this way. While this works great for informational sites, we aren't able to interact with our users very well. Later, we'll find out how many modern websites serve dynamic HTML. First, we'll begin using popular APIs to access some of all the cool data that is free to use!

#### Getting data from Spotify API

// Your text here

#### Rendering Data on the front end

Now we have some really cool data from Spotify. It's up to us, how we display this data to our users. Earlier, we sent static HTML pages to the client, we need a way to put the data we got from Spotify into our HTML Document to be sent to the user. The way many applications do this is called **templating**.

Templates look very similar to HTML but they include features such as logic operators, data rendering, and many more. Templates will allow us to write markup that looks like this.

```handlebars
<div>
	{{title}}
</div>
```

When the template is rendered, the server will look for the variable `title` and inject it into the HTML where our brackets show.

Start by analyzing the soundzy app structure.
How it all works together
Brief HTML description
Understanding Templating (Displaying Data)
Rendering Data in our Templates
Finishing Up our App























