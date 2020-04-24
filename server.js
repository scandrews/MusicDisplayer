// Music Displayer react based - server
// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var fs = require('fs');
var mm = require('musicmetadata');

var request = require("request");

// Create Instance of Express
var app = express();
// Sets the port
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// Main Route
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


app.post("/metaData", function (req, res){
  console.log("in get metadata");
  console.log(req.body.albumToGet);

  var musicFile = req.body.albumToGet;
  console.log(musicFile);
//  currentPath = musicFile;

  // read and display the medadata from the music file
  var parser = mm(fs.createReadStream(musicFile), function (err, metadata) {
    if (err) console.log("error reading file");
    metadata.fileName = musicFile;
    console.log(metadata);
  res.send(metadata)
  });
});

app.post("/postDirContent", function (req, res){
  console.log("in post dir contect");
  console.log(req.body);

  var dirName = (req.body.directoryToGet);
  console.log(dirName);

  fs.readdir(dirName, function(err, items) {
    console.log(items);
    res.send(items)
  });
});

app.get("*", function(req, res){
  res.sendFile(__dirname)
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
