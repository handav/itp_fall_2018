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
    console.log(osc.freq(midiToFreq(C_maj_scale[note])));
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
            //play from midi note num
            playNote(num + 1, notes[num + 1], noteDuration);
            // play from letter note
            // playNote(num + 1, C_maj_scale[notes[num + 1]], noteDuration);
        }, noteDuration);
    }
}

function processText(result){
    //if loading text
    //input_text = join(result, ' ');
    //if loading notes
    input_text = join(result, '').split(' ');
    //console.log(input_text);
}

function preload(){
    input_text = loadStrings('assets/notes.txt', processText);
}

function setup() {
    // SOUND
    // A triangle oscillator
    osc = new p5.TriOsc();
    // Start silent
    osc.start();
    osc.amp(0);

    // NUMBER OF N-GRAMS
    rm = new RiMarkov(3);
    //text_to_generate_from = "G G D D E E D C C B B A A G";
    text_to_generate_from = input_text;
    //if loading text 
    //rm.loadText(text_to_generate_from);
    // if loading notes
    rm.loadTokens(text_to_generate_from);
    rm.print();
    notes = rm.generateTokens(generated_length);
    console.log(notes);
    // play from midi note number 
    playNote(0, notes[0], noteDuration);
    // play from letter note
    // playNote(0, C_maj_scale[notes[0]], noteDuration);
}

function draw() {}
