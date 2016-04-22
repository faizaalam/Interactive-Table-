module.exports = function(app){
app.get('/real-estate', function (req, res) {
  //Type "Hello World" then press enter.
  var robot = require("robotjs");

  robot.setMouseDelay(2);
  var screenSize = robot.getScreenSize();
  var height = screenSize.height
  var width = screenSize.width;


    for (var x = 0; x < width; x++) {
          y =  height/2 -10;
    robot.moveMouse(x,y);
    }

  }
);
}
