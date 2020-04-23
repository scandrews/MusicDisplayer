// Include React
var React = require("react");
const path = require('path');

// block at lower part of screen for scraped stories
var Directorypage = React.createClass({

  // handle the show album button
  handleButtonClick: function(event) {
    // var indexOfCurrentArticle = $( ".saveNews" ).index( this );
    console.log("got the show metadata click");
    event.preventDefault()
    // console.log(event.dispatchMarker);
    // console.log(this.props);
    // console.log(event.dispatchMarker);

    // find the index into the map
    var indexOfCurrentFolder = event.dispatchMarker.split("$");
    console.log(indexOfCurrentFolder);
    var indexOfCurrentFolder = indexOfCurrentFolder[1].split(".");
    var indexOfCurrentFolder = indexOfCurrentFolder[0];

    // remove leading $ if there
    if (indexOfCurrentFolder.substring(0, 1) == '$') { 
      indexOfCurrentFolder = indexOfCurrentFolder.substring(1);
    };
    console.log(indexOfCurrentFolder);

    // index into the file list [array] to get the folder name
    var folderToGet = this.props.folder[indexOfCurrentFolder];
    console.log (folderToGet);

    // determin if it's a file or a directory
    var folderLength = folderToGet.length;
    console.log(folderLength);

    var fileType = ""
    if (folderToGet.substring(folderLength-5) === ".flac"){
      fileType = "music";
      console.log("it's a flac file");
      }
    var fileExtension = folderToGet.substring(folderLength-4);
    console.log(fileExtension);
    switch (fileExtension){
      case ".mp3":
        console.log ("it's an mp3")
        fileType = "music";
        break;
      case ".jpg":
        console.log ("it's a pic")
        break
    };

    var locationOfPeriod = folderToGet.indexOf(".");
    console.log(locationOfPeriod);
    if (locationOfPeriod === -1){
      console.log("It's a folder!");
      console.log(this.props);
      this.props.setTerm( "getDirContent", this.props.currentPath + "/" + folderToGet);

    } else if (locationOfPeriod === folderLength-2||locationOfPeriod === folderLength-3||locationOfPeriod === folderLength-4||locationOfPeriod === folderLength-5) {
        console.log("It's a file!");

      this.props.setTerm( "getMetaData", "/" + folderToGet);

    } else {
      console.log("ERROR WTF");
    }
  },

  handleUpOneFolder: function(){
    console.log("got the back one folder click");
    this.props.setTerm( "backOneFolder", "back");
  },


  // Here we describe this component's render method
  render: function() {
    console.log("in Directorypage render");
    console.log(this);
    console.log(this.props.folder);
    const clickFunction = this.handleButtonClick
    if (this.props.folder.length>0){
        console.log("got the this");
        return (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Directory Listing - Directory Page</h3>
            </div>
            <div className="panel-body">
            <p><button onClick={this.handleUpOneFolder} className="btn btn-primary">Back</button>
            </p>

              {
                this.props.folder.map(function(folder, i) {
                  return (
                    <div key={i}>
                      <form onSubmit={clickFunction} >
                        <p><button ref={i} className="btn btn-primary saveNews" type="submit">
                          Show
                          </button>
                          {folder}
                        </p>
                      </form>
                    </div>
                  )
                })
              }


            </div>  
          </div>
        );

    } else if (this.props.directoryContent) {
        console.log("in stories page render have props data");
        console.log(this.props.data)
    } else
    {
        console.log("nothing to render");
        return (
          <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">No folder selected</h3>
              </div>
          </div>
        )
    }
  }

// end Directorypage
});

// Export the component for use in other files
module.exports = Directorypage;
