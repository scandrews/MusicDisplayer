// Include React
var React = require("react");

var Link = require("react-router").Link;

// Include the children
var Startpage = require("./children/Startpage");
var Metapage = require("./children/Metapage");
var DirectoryPage = require("./children/DirectoryPage");

// routes for the helpers file
var helpers = require("./utils/helpers");

// Create the Main component
var Main = React.createClass({

  // Set the initial state
  getInitialState: function() {
    console.log("in Main - set initial state");
    return {  whatToDo: "",
              scrapedArticles: [],
              savedArticles: [],
              directoryContent: [],
              indexOfArticles: 0,
              currentPath: "C:/Users/Steve/music",
              folderList: []
            };
  },

  // If the component changes
  componentDidUpdate: function() {
        console.log("in main - component did update - index");
        console.log(this.state.whatToDo);
        console.log(this.state.folder);

      if (this.state.whatToDo === "getMetaData"){
            console.log("in main get meta data");
            console.log(this.state.folder);
            console.log(this.state.currentPath);
            helpers.getMetaData(this.state.currentPath + this.state.folder).then(function(response){
              console.log("back from getting meta data");
              console.log(response.data);
              this.setState({ metaData: response.data, whatToDo: "dont" });
            }.bind(this));

        } else if (this.state.whatToDo === "getDirContent"){
            var newFolderToGet = this.state.folder;
            console.log(newFolderToGet);
            helpers.getDirContents(newFolderToGet).then(function(response){
              console.log("in main - get dir contents - back from helpers");
              console.log(response);
              console.log(this.state);
              var folderToGet = this.state.currentPath + response.data;
              this.setState({ currentPath:newFolderToGet, folderList: response.data, whatToDo: "done"});
            }.bind(this));

        } else if (this.state.whatToDo === "backOneFolder"){
            console.log("in main - back one folder");
            console.log(this.state.currentPath);
            var tempFolder = this.state.currentPath.split("/");
            console.log(tempFolder);
            var yetAnotherFolderToGet = tempFolder[0];
            for (var i = 1; i<tempFolder.length-1; i++){
                yetAnotherFolderToGet = yetAnotherFolderToGet + "/" +tempFolder[i]
            };
            console.log(yetAnotherFolderToGet);
            helpers.getDirContents( yetAnotherFolderToGet ).then(function(response){
              console.log("in main back one folder back from helpers");
              console.log(response);
              this.setState({ currentPath:yetAnotherFolderToGet, folderList: response.data, whatToDo: "done"});
            }.bind(this));

        } else if (this.state.whatToDo === "done"){
          console.log("got the done");
          return
        }
  },


  // This function allows children to update the parent.
  setTerm: function(input, index) {
    console.log("in main at setTerm");
    console.log(input, index);
    console.log(this.state);
    this.setState({ whatToDo: input, folder: index });
  },


  // Render main - the page heading
  render: function() {
    console.log("in Main render");
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Music Meta Data Displayer</h2>
          </div>

          <div className="col-md-10">
            <Startpage setTerm={this.setTerm} currentPath={this.state.currentPath} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <DirectoryPage setTerm={this.setTerm} folder={this.state.folderList} currentPath={this.state.currentPath}/>
          </div>
          <div className="col-md-4">
            <Metapage setTerm={this.setTerm} metaData={this.state.metaData} />
          </div>

        </div>
      </div>
    );
  },

});

// Export the component
module.exports = Main;
