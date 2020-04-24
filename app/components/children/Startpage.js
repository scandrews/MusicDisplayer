// Include React
var React = require("react");
var Link = require("react-router").Link;

// set the path on startup 
var initialPath = "C:/Users/Steve/music";

// object to export
var Startpage = React.createClass({

  // Set the initial state
  getInitialState: function() {
    console.log("In start page set initial state");
    console.log(this);
    return {  term: "",
              currentPath: initialPath };
  },

  //hande the show directory contect button
  handleShowDirectoryContent: function(event) {
    event.preventDefault();
    console.log("in start page, handle show Directory content");
    console.log (this.state);
    console.log (this.state.currentPath);

    this.props.setTerm( "getDirContent", this.state.currentPath);
  },

  handlePathChange: function(event) {
    console.log("got the handle path change click");
    var newPath = {};
    newPath = this.state.currentPath + event.target.value;
    this.setTerm( "getDirContent", newPath);
  },

  // handle user input
  handleChange: function(event) {
    console.log("in start page - handle change");
    this.setState({ currentPath: event.target.value });
  },

  componentWillReceiveProps(props) {
    this.setState({ currentPath: props.currentPath});
  },
  
  // The second second section of the page
  // showing the current path and the button to get the dir content
  render: function() {
    console.log("In start page render");
    console.log(this);
    console.log(this.state.currentPath);

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Current Folder</h3>
        </div>
        <div className="panel-body text-center">
          <div className="row">

              <form onSubmit={this.handlePathChange}>

                <div>
                  <input  type="text"
                          value = {this.state.currentPath}
                          className="form-control"
                          id="currentPath"
                          onChange={this.handleChange}
                          required
                  />
                </div>

                <div>
                  <button onClick={this.handleShowDirectoryContent} type="submit" id="button" className="btn btn-primary btn-lg"> Show Directory Contents</button>
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

