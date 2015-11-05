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


#### Web Server

This is the backbone of the app and is unsurprisingly written in the file server.js. What's the job of a server? A server's job is to always be listening for "requests". Once the server receives a request, its job is to then send a "response" that includes the data that was requested. Your web browsers (Chrome, Firefox, etc.) are usually the ones making these requests.

Take for example typing in "www.espn.com" into your browser. When you do this, your browser will send a request to an ESPN server. The ESPN server will then process this request and send back the webpage that you requested in its response. Pretty straightforward, no? If not, these concepts will hopefully become more clear as we write our server together.

```javascript
var obj = {
	name: 'Rishin'
};
console.log(obj);
```
