// Example in part derived from Processing examples http://www.wekinator.org/examples/

//Necessary for OSC communication with Wekinator:
import oscP5.*;
import netP5.*;
OscP5 oscP5;
int blueColor = 255;
int wek_class = 0;

void setup() {
  size(640, 360);
  //Initialize OSC communication
  oscP5 = new OscP5(this, 12000); //listen for OSC messages on port 12000 (Wekinator default)
}

void draw() {
  background(0);
  fill(0, 255, 0);
  textSize(20);
  text( "Use 2 Wekinator outputs", 5, 15 );
  text( "Listening for /wek/outputs on port 12000", 5, 30 );
  fill(0, 0, blueColor);
  textSize(28);
  text("Class is " + wek_class, 300, 200);
}

//This is called automatically when OSC message is received
void oscEvent(OscMessage theOscMessage) {
  if (theOscMessage.addrPattern().equals("/wek/outputs")) {
    if (theOscMessage.get(0).floatValue()==1.0) {
      blueColor = 150; 
      wek_class = 1;
    }
    if (theOscMessage.get(0).floatValue()==2.0) {
      blueColor = 255; 
      wek_class = 2;
    }
    println(theOscMessage.get(0).floatValue());
  }
}
