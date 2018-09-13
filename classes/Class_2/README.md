### Workshop Week 2

In the folder markov_code, there are two .js files: one to create a simple Markov Chain, and one to create a Markov Chain from a processed MIDI file. 

In the folder python_midi_processing, there is a Python script to take a midi file and output a text file of the chronological notes from the midi.

This workshop will require rita.js. If you don't already have it, please download the rita-full.js file from [https://rednoise.org/rita/download.php](https://rednoise.org/rita/download.php).


#### Creating a local server

p5.js examples require a simple server to host external files.

There are many different ways to create a local server. Here are some:

If you use node and npm you can install live-server:

```
npm install -g live-server
```

And then run from the root:

live-server

If you use python 2:

```
python -m SimpleHTTPServer
```

In python 3

```
python3 -m http.server
```

An alternate option for both Python 2 and 3, which does automatic reloading when you make a change:

First, type:

```
pip install livereload
```

then, to run the server:

```
livereload
```

Then, in the browser of your choice (we'll be using Chrome), navigate to the localhost url in your url bar.


### Assignment Week 2

1) Familiarize yourself with writing basic Python code. This can be through whatever resource you're most comfortable with. I recommend going through Code Academy (lessons 1-8, minus the 'pro' lessons):
https://www.codecademy.com/learn/learn-python


2) Read: https://medium.com/@alwaysbcoding/an-intro-to-music-theory-for-hackers-8969ad4c1231

3) (Optional) Next week we will be working on data sonification. A cleaned dataset will be provided, but you're welcome to bring your own (cleaned) data as well.