# Installation and Downloads

We will help you with any difficulties during this section.

## 1) Download this repo

Click on the green 'clone or download' button. To clone using terminal, type:

`git clone https://github.com/handav/workshop.git` 

and then

`cd workshop` to enter the folder.

Otherwise, download the zip file to the location of your choosing.

## 2) Check your Python version and install requirements

In your terminal, type `python -V` to see your Python version. There are examples here for use with Python 2 and Python 3.

To install requirements, type `pip install -r requirements.txt`

If that doesn't work, you can type:

`pip install midiutil`
and
`pip install scipy`

or else install a Conda environment:

### Installing Conda

Conda is a environment management tool that will allow us to manage different python versions in your computer.

#### 1) Install miniconda 
   - Go to https://conda.io/miniconda.html 
   - Choose Python 3.6 Mac OSX 64-bit (bash installer) and download
   
#### 2) Open Terminal
   - Type: `bash /path/to/the/file/you/just/downloaded`
   - You can just drag the bash file you download into your terminal window from where you installed it
   - Press `Enter` to continue
   - Review the license and approve the license terms - type in `yes` and press enter
   - Press `Enter` again to confirm the location of install
   - Type `yes` when it asks you if the install location should be prepended to PATH
   - Restart Terminal for changes to take effect
   - Type: `conda info`
   - If it prints out some stuff then it has installed correctly
   
#### 3) Create an environment
   - Open Terminal
   - Type: `conda create -n eyeo python=3.5.2`
   - Type: `y` (and press Enter)
   - This will create a conda environment with the name 'eyeo' and python version 3.5.2

#### 4) Activate environment
   - Open Terminal
   - Type: `source activate eyeo`
   - You should see (eyeo) prepended before your terminal prompt

#### 5) Install dependencies
   - Make sure you can see (eyeo) prepended before the terminal prompt before proceeding
   - Type: `pip install -r requirements.txt`


## 3) Download MuseScore if you haven't already

Please download MuseScore (https://musescore.org/en) or a midi sheet music reader of your choice.

## 4) Get Fluidsynth

Check this link to see how to best get FluidSynth: 
https://sourceforge.net/p/fluidsynth/wiki/Download/

For Mac users who have Homebrew, type:
`brew install fluidsynth`

If you need to install Homebrew: 
https://brew.sh/

## 5) Find some cool sound samples

Our p5.js example will work with samples - there are some included in this repo, but you are also free to download some you like better. I suggest NASA's free library of space sounds: 

http://cdm.link/2014/10/nasa-posts-huge-library-space-sounds-youre-free-use/

https://soundcloud.com/nasa (must be logged in to SoundCloud to download).

Remember that these are all different lengths. You can download shorter samples, or edit the audio with a program like Quicktime or Audacity.

---

## More about the data

The data comes from the National UFO Reporting Center (NUFORC): http://www.nuforc.org/webreports.html and this repo, which has been cleaned up to create a field for duration in seconds: https://github.com/planetsig/ufo-reports/tree/master/csv-data

The included ufo_small.csv is a cleaned sample of 7 months of UFO sightings, taken from the above repo.

---

## More information about MidiUtil and what you can do with it:

https://media.readthedocs.org/pdf/midiutil/1.1.3/midiutil.pdf

Midi instrument numbers: http://www.pjb.com.au/muscript/gm.html

---

## Resources

https://programminghistorian.org/en/lessons/sonification

https://sonification.de/handbook/chapters/

http://www.algorithmiccomposer.com/2016/01/from-data-to-music-pd-as-sonification.html

Music theory for hackers: 
https://medium.com/@alwaysbcoding/an-intro-to-music-theory-for-hackers-8969ad4c1231