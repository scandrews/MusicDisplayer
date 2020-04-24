// Include axios
var axios = require("axios");

// Helper functions for making API Calls
var helper = {

	// this route gets the meta data for a file
	getMetaData: function(dirToGet) {
		console.log("in helpers get metadata");
		console.log(dirToGet);
		return axios.post("/metaData", {albumToGet: dirToGet});
	},

	// This will be the get directory content
	getDirContents: function(dirToGet){
		console.log("in helpers get dir content - this");
		console.log(dirToGet);
		return axios.post("/postDirContent", { directoryToGet  : dirToGet});
	},

// end helper
};

// export the module
module.exports = helper;
