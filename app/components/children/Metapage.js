// Include React
var React = require("react");

// block at lower part of screen for scraped stories
var Metapage = React.createClass({

  // handle the show metadata button
//  handleButtonClick: function(event) {
//    console.log("got the save click");
//    event.preventDefault()
//    console.log(event.dispatchMarker);

//    var indexOfCurrentFile = event.dispatchMarker.split(".");
//    var indexOfCurrentFile = indexOfCurrentFile[5];
    // remove leading $ if there
//    if (indexOfCurrentFile.substring(0, 1) == '$') { 
//      indexOfCurrentFile = indexOfCurrentFile.substring(1);
//    };
//    console.log("value - " + indexOfCurrentFile);
//    console.log(this.props);
//    this.props.setTerm( "getMetaData", indexOfCurrentFile);
//  },
 

  // Render meta data
  render: function() {
    console.log("in Metapage render");
    console.log(this);
    console.log(this.props.metaData);
    const clickFunction = this.handleButtonClick
    if (this.props.metaData){
        console.log("got the this");
        var stuff = this.props.metaData.artist[0];
        console.log(stuff);
        return (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Meta Data</h3>
            </div>
            <div className="panel-body">

                <p>Song Title - {this.props.metaData.title}</p>
                <p>Album Name - {this.props.metaData.album}</p>
                <p>Album Year - {this.props.metaData.year}</p>
                <p>Album Artist - {this.props.metaData.artist}</p>
                <p>Track - {this.props.metaData.track.no}</p>
                <p>Genre - {this.props.metaData.genre}</p>

            </div>  
          </div>
        )
    } else if (this.props.directoryContent) {
        console.log("in Meta Data render have props data");
        console.log(this.props.data)
    } else
    {
        console.log("nothing to render");
        return (
          <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">No New Meta Data</h3>
              </div>
          </div>
        )
    }
  }

// end Metapage
});

// Export the component for use in other files
module.exports = Metapage;
