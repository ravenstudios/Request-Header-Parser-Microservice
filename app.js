var express = require("express");
var systemInfo = require("./systemInfo");

var app = express();

app.get("/", function(req, res){
  var lang = req.acceptsLanguages();

  res.send(systemInfo(lang));


});

app.listen(3000, function(){
  console.log("server started");
})


// ***** used for glitch *****
// var listener = app.listen(process.env.PORT, function () {
//   console.log("server started");
// });
