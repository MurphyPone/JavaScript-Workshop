//Variables have to be declared outside of setup, otherwise they will be local to that function
var peter = []; //Create an empty array called peter

//Gets called on start up
function setup() {
  createCanvas(windowWidth, windowHeight);  //All our p5 elements are drawn onto a canvas
  background(55); //Sets the background color 51, 51, 51 in RGB format
  textSize(30); //sets the default font size to 30 px
  fill(255);  //sets the draw color to white
  strokeWeight(3);  //Adds a border to all elements, doesn't look good with text
  stroke(0, 200, 30); //Sets teh stroke color for drawables

  //JQuery function which reads a JSON file, and calls a function once the JSON has been loaded
  $.getJSON('contacts.json', function(data) {
    console.log(data);  //Prints the resulting "data" of our JQuery request to the console

    //Grab information from our JSON file, and save it the array variable "peter"
    
  })
}

//Gets called ~60 times per second
function draw() {
  background(55); //Redraw the background, p5 does not automatically "erase" the screen automatically

  //All objects are drawn relative to the origin which is set to the top left of the screen by default
  //text(content, xPosition, yPosition)
  

  //Can draw shapes, images, lines, etc.


}
