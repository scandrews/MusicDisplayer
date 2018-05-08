//  server app for the music player
//  intially this will just read the meta data from an entered music file


var express = require("express");
var bodyParser = require("body-parser");
var fs = require('fs');
var mm = require('musicmetadata');


// Create instance of Express
var app = express();
// Set the port
var PORT = process.env.PORT || 3000;

// create a new parser from a node ReadStream 
app.use(bodyParser.urlencoded({ extended: true }));


// ---- Routes ---------------------------

// Main Route
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});




// temp file to test the metadata parser
var musicFile = ("../../../../Music/151126/Jeff Beck/You Had It Coming/05 - Nadia.flac");

// read and display the medadata from the music file
var parser = mm(fs.createReadStream(musicFile), function (err, metadata) {
	if (err) console.log("error reading file");
	console.log(metadata);
});


// this reads all the file names in a directory
// got this from stack overflow  https://stackoverflow.com/questions/10049557
var name = ("../../../../Music/151126/Jeff Beck/You Had It Coming");

fs.readdir(name, function(err, files) {
    if (err) return;
    files.forEach(function(f) {
        console.log('Files: ' + f);
    });
});





// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
