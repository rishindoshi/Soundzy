# Soundzy

## Setup

We first need to download and install Node.js and NPM (Node package manager). Head to the [Node.js downloads page](https://nodejs.org/en/download/) and download and run the appropriate installer for your operating system (generally, Mac users should use the .pkg and Windows users should use the .msi). Check to make sure everything was installed correctly by opening a terminal and entering the following commands (if there is no output, you may need to troubleshoot what went wrong during installation).
```bash
$ node -v
$ npm -v
```
Next, we need to pull down the code provided in this GitHub repository. To do so, open a terminal and navigate to a folder where you will store our project files. Enter the following command:  
```bash
$ git clone https://github.com/rishindoshi/Soundzy.git
```
Finally, navigate into the newly created folder and enter:
```bash
$ npm install
```
This will install all of the packages our project will depend on.

## Useful Links for this Tutorial

* https://developer.spotify.com/web-api/endpoint-reference/
* http://webapplog.com/handlebars/
* http://expressjs.com/starter/basic-routing.html
* http://blog.modulus.io/node.js-tutorial-how-to-use-request-module

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

 What we've done with these three lines of code is simply have our server start listening for requests. Type `$ node beginner_server.js` into your command line to start the server and then navigate to `localhost:8888` from your browser to see what's happening. `localhost` is the domain that is unsed to test a server **locally**. This means that only you can submit requests to this server from your own computer. Now if you were to buy the domain www.soundzy.com, you can then have users from everywhere start accessing the app.

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

Let's make some upgrades to our server. Previously we saw how the server and the client interact by sending messages back and forth. Now, instead of giving our visitors a message, lets present them with a full "web page". Now when we get a request, we will **serve** them our web page that's written in HTML.

If you are familar with HTML this should look fairly simple to you. HTML is a markup language that is used to represent visual structures in web browsers. What does that mean? When a web browser sees an HTML file, it is able to turn it into the visual structure you see on facebook.com or any other website.

Let's change our routes to serve our pre-made HTML files.

```javascript
var app = require('express')();
app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/example_home.html');
});
app.get('/tracks', function(req, res){
	res.sendFile(__dirname + '/views/example_tracks.html');
});
app.listen(8888);
console.log("Server magic happens on port 8888");
```

Here we're using Express's `sendFile()` function which does exactly what is sounds like it does, sends the file.

Congrats! You now have a functioning web server that serves a static web page! A good majority of the web behaves this way. While this works great for informational sites, we aren't able to interact with our users very well. The first step to making our application dynamic will be taking an `artist_name` as input from the user, so then we can generate content specific to that artist.

So, on our homepage, there will be an HTML input box where a user will type in a desired artist name. Once the user types the artist name in and presses an HTML submit button, we want a request to be sent to our server, and we want our server to be able to extract the user supplied `artist_name` from this request. Let's write some simple HTML to accomplish this.

```html
<form action="/tracks">
	<input name="artist_name">
	<button type="submit">Go!</button>
</form>
```

Here we have an **input** element and a **button** element, and the `action="/tracks"` line tells the browser to submit a request to our `/tracks` route when the user presses the submit button. So let's put this HTML in the `example_home.html` file and run our server. Navigate to the homepage, type in any artist name, and press the submit button. I typed in "kanye", and then I got redirected to this url: `http://localhost:8888/tracks?artist_name=kanye`. 

The `?` in a URL is used to denote a **query parameter**. Query parameters are tacked onto the URL by your browser, and are extracted by the server and treated as user input. So how can we get the `artist_name` variable on the server? It takes one line of code :).

```javascript
app.get('/tracks', function(req, res){
	var artist = req.query.artist_name;
	console.log(artist);
	res.sendFile(__dirname + '/views/example_tracks.html');
});
```

The `req.query.artist_name` extracts the `artist_name` query parameter from the URL. Try running the server and typing in an artist again and see if the name is printed on your console. HOORAH, now our server is taking user input! Now, we need to take the user supplied artist name, and use it to request data from Spotify. 

#### Getting data from Spotify API

Node's request module will allow us to make requests to external servers. For this app, we will use the module to request publically accessible data from Spotify's servers. [Here](https://developer.spotify.com/web-api/endpoint-reference/) is where you can find Spotify's documentation on what data they make available and how to access that data.

We first want to search for an artist. Lo and behold, Spotify has a route that allows us to do this. Spotify tells us to submit a request to the `https://api.spotify.com/v1/search` URL and requires two query parameters that they will use to process our request. We need to provide a `q` paramter which specifies what we want to search for (e.g kanye), and also a `type` parameter which specifies what we are searching for (an artist in our case). So we will construct a URL like such:

```
https://api.spotify.com/v1/search?q=kanye&type=artist
```

Notice the `?` character used to denote the query parameters and the `&` character used to separate different query parameters.

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























