p5.js examples require a simple server to host external files.

## Creating a local server

There are many different ways to create a [local server](https://github.com/processing/p5.js/wiki/Local-server). Here are some:

If you use node and npm you can install `live-server`: 
```zsh
npm install -g live-server
```
And then run from the root:
```
live-server
```
If you use python 2:
```zsh
python -m SimpleHTTPServer
```
In python 3
```
python3 -m http.server
```

An alternate option for both Python 2 and 3, which does automatic reloading when you make a change:

First, type:

`pip install livereload`

then, to run the server:

`livereload`

Then, in the browser of your choice (we'll be using Chrome), navigate to http://localhost:8000/ (or the port printed in terminal) in your url bar.