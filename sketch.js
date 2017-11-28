//Variables have to be declared outside of setup, otherwise they will be local to that function
var peter = []; //Create an empty array called peter
peter.name;
peter.address;
peter.number;

//Gets called on start up
function setup() {
  createCanvas(windowWidth, windowHeight);  //All our p5 elements are drawn onto a canvas
  background(55); //Sets the background color 51, 51, 51 in RGB format
  textSize(30); //sets the default font size to 30 px
  fill(255);  //sets the draw color to white
  strokeWeight(3);  //Adds a border to all elements, doesn't look good with text
  stroke(0, 200, 30);

  //JQuery function which reads a JSON file, and calls a function once the JSON has been loaded
  $.getJSON('contacts.json', function(data) {
    console.log(data);  //Prints the resulting "data" of our JQuery request to the console

    //Grab information from our JSON file, and save it the array variable "peter"
    peter.name = "Peter Murphy";
    peter.address = data["Contact List"].People["Peter Murphy"].Address;
    peter.number = data["Contact List"].People["Peter Murphy"]["work phone"];
  })
}

//Gets called ~60 times per second
function draw() {
  background(55); //Redraw the background, p5 does not automatically "erase" the screen automatically

  //All objects are drawn relative to the origin which is set to the top left of the screen by default
  //text(content, xPosition, yPosition)
  if(peter.name !== undefined) {  //Draw will jump the gun, and try to run before setup, JAVASCRIPT IS A BAD LANGUAGE, SCRAP THE WHOLE WORKSHOP
    text(peter.name, 20, 50);
    text(peter.address, 20, 80);
    text(peter.number, 20, 110);
  }

  //Can draw shapes, images, lines, etc.
  rect(100,200, 400,200);

}
