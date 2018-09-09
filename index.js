var express = require('express');
var app = express();
var indexRoutes = require('./routes.js');

// express use folder public
app.use(express.static(__dirname + "/public"));


// Routes
app.use(indexRoutes);

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
