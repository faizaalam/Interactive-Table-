module.exports = function(app){
app.get('/tiger', function (req, res) {
    res.render('home');
  }
);
}
