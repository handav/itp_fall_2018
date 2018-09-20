var samples = [];
var iterateTime = 1000;

var shapes = ['circle', 'disk', 'unknown', 'other', 'triangle', 'cigar', 'light', 'sphere', 'fireball', 'oval', 'diamond', 'changing', 'formation', 'flash', 'cylinder', 'chevron', 'rectangle', 'cross', 'egg', 'teardrop', 'cone'];

function preload() {
  // load data
  table = loadTable('../data/ufo_small.csv', 'csv', 
    function(success){
    console.log('success');
  }, function(err){
    console.log(err);
  });

  // load music samples
  for (var i =1; i<8; i++){
    var filename = 'samples/trimmed/' + i + '.m4a';
    var s = loadSound(filename);
    samples.push(s);
  }
}

function setup() {
  all_sightings = table.getRows();
  console.log(all_sightings);
  createCanvas(1000, 500);
  nextRow(0);
  textAlign(CENTER);
}

function cleanText(text){
  text = text.replace(new RegExp("&#44", 'g'), ",");
  text = text.replace(new RegExp("&#39", 'g'), "'");
  text = text.replace(new RegExp("&amp;", 'g'), "&");
  text = text.replace(new RegExp("&#33", 'g'), "!");
  text = text.replace(new RegExp("&#8217", 'g'), "\'");
  text = text.replace(new RegExp("&#8230", 'g'), "...");
  text = text.replace(new RegExp("&quot;", 'g'), "\"");
  return text.trim();
}

function drawToScreen(i){
  background(0, 0, 40);
  textSize(18);
  fill(240);
  let displayText = cleanText(all_sightings[i]['arr'][7]);
  text(displayText, 350, 100, 300, 300);
}

function nextRow(i){
  // draw description text to screen
  drawToScreen(i);

  // get the shape of the ufo 
  let shape = all_sightings[i]['arr'][4];
  if (shape.length <= 0){
    shape = 'unknown';
  }
  let index = shapes.indexOf(shape) % 7;

  // play one sample for each ufo sighting, on a fixed timeout 
  setTimeout(function(){
    samples[index].play();
    if (i < all_sightings.length){
      nextRow(i+1);
    }
  }, iterateTime);
}