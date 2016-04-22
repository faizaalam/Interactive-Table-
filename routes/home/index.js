var robot = require("robotjs");
var grid = require('../../grid.js');

module.exports = function(app){
app.get('/', function (req, res) {

//Speed up the mouse.
robot.setMouseDelay(2);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

console.log(grid.screen);
console.log(grid.pin);
  });
}
