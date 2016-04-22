module.exports = function(app){
app.get('/tiger', function (req, res) {
  var robot = require("robotjs");

//Speed up the mouse.
robot.setMouseDelay(2);

var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width/ 2;
var radius = width/4;
var twoPI = Math.PI * 2.0 * width ;
for (var x = 0 ; x < width; x++)
{

    y = height/2;
  var  X= (x - radius) * (x - radius);
  var  Y= (y - radius) * (y - radius);
    robot.moveMouse(X , Y);
}
  }
);
}
