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

This is the backbone of the app. The server is in charge of "Serving" requests for users. These requests can come in many forms from images and text to full html web pages.

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
