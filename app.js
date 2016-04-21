var express = require('express');
var exphbs  = require('express-handlebars');
var robot = require("robotjs");

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




require('./routes/Dictionary/index')(app);
require('./routes/Play with the tiger/index')(app);
require('./routes/Real-estate model/index')(app);
require('./routes/home/index')(app)
app.listen(3000);
