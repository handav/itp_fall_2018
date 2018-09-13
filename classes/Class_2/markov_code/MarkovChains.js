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
    console.log('num: ', num);
    if (num < generated_length-1) {
        setTimeout(function() {
            console.log(C_maj_scale[notes[num + 1]]);
            playNote(num + 1, C_maj_scale[notes[num + 1]], noteDuration);
        }, noteDuration);
    }
}

function setup() {
    // SOUND
    // triangle oscillator
    osc = new p5.TriOsc();
    // start silent
    osc.start();
    osc.amp(0);

    // NUMBER OF N-GRAMS
    rm = new RiMarkov(3);
    text_to_generate_from = "G G D D E E D C C B B A A G";
    rm.loadText(text_to_generate_from);
    rm.print();
    notes = rm.generateTokens(generated_length);
    console.log(notes);
    // play from letter note
    //playNote(0, C_maj_scale[notes[0]], noteDuration);
}

function draw() {}
