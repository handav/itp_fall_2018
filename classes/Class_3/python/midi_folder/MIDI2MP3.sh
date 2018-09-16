#!/bin/bash

SOUNDFONT=./GeneralUserGS.sf2

# the -g flag is the gain, can be between 0-10
fluidsynth -lr 44100 -g 2 -R 0 -F /tmp/midi_temp.raw $SOUNDFONT $1
lame --preset standard /tmp/midi_temp.raw ${1/.mid/.mp3}