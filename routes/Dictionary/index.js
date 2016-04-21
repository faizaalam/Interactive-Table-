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
       x: w/6,
       y: h/4

     },
     1:{
       x: w/5 ,
       y: h/4

     },
     2 : {
       x: w/4,
       y: h/4
     },
     3:{
       x: w/3 ,
       y: h/4

     },
     4:{
       x: w/2 ,
       y: h/4

     },
     5:{
       x: w/1 ,
       y: h/4

     },
     6:{
       x: w/6 ,
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
       x: w/1 ,
       y: h/3

     },
     12:{
       x: w/6 ,
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
       x: w/1 ,
       y: h/2

     },
     18:{
       x: w/6 ,
       y: h/1

     },
     19:{
       x: w/5 ,
       y: h/1

     },
     20:{
       x: w/4 ,
       y: h/1

     },
     21:{
       x: w/3 ,
       y: h/1

     },
     22:{
       x: w/2 ,
       y: h/1

     },
     23:{
       x: w/1 ,
       y: h/1

     }
}

res.send(dictionary);

  });
};









// module.exports = {
//     0:{
//       x: ,
//       y: h/
//
//     },
//     1:{
//       x: w/ ,
//       y: h/
//
//     },
//     2 : {
//       x: w/ ,
//       y
//     },
//     3:{
//       x: w/ ,
//       y: h/
//
//     },
//     4:{
//       x: w/ ,
//       y: h/
//
//     },
//     5:{
//       x: w/ ,
//       y: h/
//
//     },
//     6:{
//       x: w/ ,
//       y: h/
//
//     },
//     7:{
//       x: w/ ,
//       y: h/
//
//     } ,
//     8:{
//       x: w/ ,
//       y: h/
//
//     },
//     9:{
//       x: w/ ,
//       y: h/
//
//     },
//     10:{
//       x: w/ ,
//       y: h/
//
//     },
//     11:{
//       x: w/ ,
//       y: h/
//
//     },
//     12:{
//       x: w/ ,
//       y: h/
//
//     },
//     13:{
//       x: w/ ,
//       y: h/
//
//     },
//     14:{
//       x: w/ ,
//       y: h/
//
//     },
//     15:{
//       x: w/ ,
//       y: h/
//
//     },
//     16:{
//       x: w/ ,
//       y: h/
//
//     },
//     17:{
//       x: w/ ,
//       y: h/
//
//     },
//     18:{
//       x: w/ ,
//       y: h/
//
//     },
//     19:{
//       x: w/ ,
//       y: h/
//
//     },
//     20:{
//       x: w/ ,
//       y: h/
//
//     },
//     21:{
//       x: w/ ,
//       y: h/
//
//     },
//     22:{
//       x: w/ ,
//       y: h/
//
//     },
//     23:{
//       x: w/ ,
//       y: h/
//
//     },
//     24:{
//       x: w/ ,
//       y: h/
//
//     },
//
// };
