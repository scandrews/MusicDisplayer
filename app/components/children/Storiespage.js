// Include React
var React = require("react");

// block at lower part of screen for scraped stories
var Storiespage = React.createClass({

  // handle the save story button
  handleButtonClick: function(event) {
    // var indexOfCurrentArticle = $( ".saveNews" ).index( this );
    console.log("got the save click");
    event.preventDefault()
    console.log(event.dispatchMarker);

    var indexOfCurrentArticle = event.dispatchMarker.split(".");
    var indexOfCurrentArticle = indexOfCurrentArticle[5];
    // remove leading $ if there
    if (indexOfCurrentArticle.substring(0, 1) == '$') { 
      indexOfCurrentArticle = indexOfCurrentArticle.substring(1);
    };
    // indexOfCurrentArticle = indexOfCurrentArticle.split(".");
    // var indexOfCurrentArticle = React.findDOMNode(this.data-reactid);
    console.log("value - " + indexOfCurrentArticle);
    console.log(this.props);
    this.props.setTerm( "getMetaData", indexOfCurrentArticle);
  },
 

  // Here we describe this component's render method
  render: function() {
    console.log("in Storiespage render");
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
              <h3 className="panel-title text-center">Meta Data - Stories Page</h3>
            </div>
            <div className="panel-body">

                <p>Song Title - {this.props.metaData.title}</p>
                <p>Album Artist - {this.props.metaData.artist}</p>
                <p>Album Name - {this.props.metaData.album}</p>
                <p>Album Year - {this.props.metaData.year}</p>
                <p>Track - {this.props.metaData.track.no}</p>
                <p>Genre - {this.props.metaData.genre}</p>

            </div>  
          </div>
        )
    } else if (this.props.directoryContent) {
        console.log("in stories page render have props data");
        console.log(this.props.data)
    } else
    {
        console.log("nothing to render");
        return (
          <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">No New Stories</h3>
              </div>
          </div>
        )
    }
  }

// end Storiespage
});

// Export the component for use in other files
module.exports = Storiespage;
