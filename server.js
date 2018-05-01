//  server app for the music player
//  intially this will just read the meta data from an entered music file



var fs = require('fs');
var mm = require('musicmetadata');
 
// create a new parser from a node ReadStream 
var musicFile = ("../../../../Music/151126/Jeff Beck/You Had It Coming/05 - Nadia.flac");

var parser = mm(fs.createReadStream(musicFile), function (err, metadata) {
  if (err) console.log("error reading file");
  console.log(metadata);
});


// this reads all the file names in a directory
// got this from stack overflow  https://stackoverflow.com/questions/10049557
// haven't made this work, just copied it in from stack overflow

var name = ("../../../../Music/151126/Jeff Beck/You Had It Coming");



fs.readdir(name, function(err, files) {
    if (err) return;
    files.forEach(function(f) {
        console.log('Files: ' + f);
    });
});

