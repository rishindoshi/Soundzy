# Soundzy

### For Mac Users

1. We'll first need to download Node.js and npm, which is Node's package manager.

2. To get Node and npm, we'll run the command:
```
brew install node
```

3. What's Homebrew? Well they describe themselves as the "package manager that installs stuff that Apple didnt". To install Homebrew run:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### App Structure

We're going to analyze and discuss each element of our app to understand how it all works together.


#### Web Server

This is the backbone of the app and is unsurprisingly written in the file server.js. What's the job of a server? A server's job is to always be listening for "requests". Once the server receives a request, its job is to then send a "response" that includes the data that was requested. Your web browsers(Chrome, Firefox, etc.) are usually the ones making these requests. Take for example typing in "www.espn.com" into your browser. When you do this, your browser will send a request to an ESPN server. The ESPN server will then process this request and send back the webpage that you requested in its response. Pretty straightforward, no? If not, these concepts will hopefully become more clear as we write our server together.

```javascript
var obj = {
	name: 'Rishin'
};
console.log(obj);
```



Our server is run with Node.js

### Views

Views are the pages that are presented to the user when they reach a certain route in the app.

#### Templating

Templating makes rending views for the client much easier than serving HTML.

### JavaScript

We use JavaScript to make things happen on the client side.

### Starting our Server

```
$ node server.js
```

This command will run our node server. Our app should now be live at `localhost:9000`. Enter that URL in your browser and you'll see the home page!

If you check the terminal you started the server in, you can see the logged requests that the server has received.
