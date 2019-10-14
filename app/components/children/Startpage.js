// Include React
var React = require("react");
var Link = require("react-router").Link;

// var initialPath = "C:/Users/Steve/music";

// object to export
var Startpage = React.createClass({

  // Set the initial state
  getInitialState: function() {
    console.log("In start page set initial state");
    console.log(this);
    return {  term: "",
              currentPath: "C:/Users/Steve/music" };
  },

  // handle user input
  handleChange: function(event) {
    console.log("in start page - handle change");
    this.setState({ term: event.target.value });
  },

  // handle show saved articles
  handleShowSaved: function() {
    console.log("in startpage handle show saved");
    // Set the parent to have the search term
    this.props.setTerm("showSaved", 0);
    console.log("between the two sets in handle show saved");
  },
  
  // handle the scrape new button
  handleGetMetaData: function(event) {
    console.log("in start page, handle get meta data");
    // Set the parent to have the search term
    this.props.setTerm( "getMetaData", 0 );
  },

  //hande the show directory contect button
  handleShowDirectoryContent: function(event) {
    event.preventDefault();
    console.log("in start page, handle show Directory content");
    console.log (this.state);
    console.log (this.state.currentPath);

    this.props.setTerm( "getDirContent", "");
  },

  handlePathChange: function(event) {
    var newState={};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  
  // Here is the component render method
  render: function() {
    console.log("In start page render");
    console.log(this);
    console.log(this.props.currentPath);
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">File Name</h3>
        </div>
        <div className="panel-body text-center">
          <div className="row">

              <form onSubmit={this.handleShowDirectoryContent}>

                <div>
                  <button onClick={this.handleGetMetaData} className="btn btn-primary btn-lg">Get Meta Data</button>
                  <button onClick={this.handleShowDirectoryContent} type="submit" id="button" className="btn btn-primary btn-lg"> Show Directory Contents</button>

                  <p className=""><strong>File Location</strong></p>

                    <input
                      type="text"
                      value = {this.props.currentPath}
                      className="form-control"
                      id="initialPath"
                      onChange={this.handlePathChange}
                      />

                </div>

              </form>

          </div>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Startpage;

