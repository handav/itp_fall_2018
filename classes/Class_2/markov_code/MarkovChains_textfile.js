var osc;
var C_maj_scale = {
    'C': 60,
    'D': 62,
    'E': 64,
    'F': 65,
    'G': 67,
    'A': 69,
    'B': 71,
}
var notes;
var noteDuration = 500;
var generated_length = 4;
var input_text;

// A function to play a note
function playNote(num, note, duration) {
    console.log('Playing ', note);
    osc.freq(midiToFreq(note));
    // fade it in
    osc.fade(0.5, 0.2);
    // // fade it out
    if (duration) {
        setTimeout(function() {
            osc.fade(0, 0.2);
        }, duration - 50);
    }
    if (num < generated_length-1) {
        setTimeout(function() {
            //play from midi note num
            playNote(num + 1, notes[num + 1], noteDuration);
        }, noteDuration);
    }
}

function processText(result){
    //if loading notes
    input_text = join(result, '').split(' ');
}

function preload(){
    input_text = loadStrings('assets/notes.txt', processText);
}

function setup() {
    // MARKOV
    // number of n-grams
    rm = new RiMarkov(3);
    // if loading notes
    rm.loadTokens(input_text);
    rm.print();
    notes = rm.generateTokens(generated_length);
    console.log(notes);

    // SOUND
    // A triangle oscillator
    osc = new p5.TriOsc();
    // Start silent
    osc.start();
    osc.amp(0);
    // play from midi note number 
    playNote(0, notes[0], noteDuration);
}

function draw() {}
