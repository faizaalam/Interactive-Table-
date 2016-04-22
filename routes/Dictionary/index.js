module.exports = function(app){

var robot = require("robotjs");

  app.get('/dictionary', function(req,res){
    var screenSize = robot.getScreenSize();
    var h = (screenSize.height);
    var w = screenSize.width;


    console.log(h +  '& ' + w);

    var dictionary =
{
  0:{
       x: 0,
       y: 0

     },
     1:{
       x: w/5 ,
       y: 0

     },
     2 : {
       x: w/4,
       y: 0
     },
     3:{
       x: w/3 ,
       y:
     },
     4:{
       x: w/2 ,
       y: 0
     },
     5:{
       x: w ,
       y: 0
     },
     6:{
       x: 0 ,
       y: h/3
     },
     7:{
       x: w/5 ,
       y: h/3
     } ,
     8:{
       x: w/4 ,
       y: h/3
     },
     9:{
       x: w/3 ,
       y: h/3
     },
     10:{
       x: w/2 ,
       y: h/3
     },
     11:{
       x: w ,
       y: h/3
     },
     12:{
       x: 0 ,
       y: h/2
     },
     13:{
       x: w/5 ,
       y: h/2
     },
     14:{
       x: w/4 ,
       y: h/2
     },
     15:{
       x: w/3 ,
       y: h/2
     },
     16:{
       x: w/2 ,
       y: h/2
     },
     17:{
       x: w,
       y: h/2
     },
     18:{
       x: 0 ,
       y: h
     },
     19:{
       x: w/5 ,
       y: h
     },
     20:{
       x: w/4 ,
       y: h
     },
     21:{
       x: w/3 ,
       y: h
     },
     22:{
       x: w/2 ,
       y: h
     },
     23:{
       x: w/1 ,
       y: h
     }
}


res.send(dictionary);


  });
};
