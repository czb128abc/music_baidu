var webpack = require('webpack')
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var musicService = require('./service/music.js');

var config = require('./webpack.config')
var express = require('express');

var bodyParser = require('body-parser');

var app = new express();
var port = 3002

var compiler = webpack(config)
app.use(express.static(__dirname + '/build'));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler)); // And this line



app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.get('/api/searchCatalogSug',function(req, res){
  var query = req.query;
  var name = query.name;
  musicService.searchCatalogSug(name,function(data){
    res.json(data);
  });
});
app.get('/api/searchSongsById',function(req, res){
  var query = req.query;
  musicService.searchSongsById(query.id,null,function(data){
    res.json(data);
  });
});
app.get('/api/getSongLrc',function(req, res){
  musicService.getSongLrc(req.query.songId,function(data){
    res.json(data);
  });
});


app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

