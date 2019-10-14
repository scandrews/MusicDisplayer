// Include axios
var axios = require("axios");

// Helper functions for making API Calls
var helper = {

	// this route gets the meta data for a file
	getMetaData: function(dirToGet) {
		console.log("in helpers get metadata");
		console.log(dirToGet);
//		var musicFile = ("C:/users/steve/Music/151126/Jeff Beck/You Had It Coming/08 - Left Hook.flac");
		return axios.post("/metaData", {albumToGet: dirToGet});
	},

	// This will be the get directory content
	getDirContents: function(dirToGet){
		console.log("in helpers get dir content - this");
		console.log(dirToGet);
		return axios.post("/postDirContent", { directoryToGet  : dirToGet});
	},

	
	// This route gets the scraped articles
	// getScrape: function() {
	//	return axios.get("/api");
	// },

	// This function posts new articles to save to the database.
	postIndexToSave: function(articleIndex) {
		console.log("in helpers post Index to save");
		console.log(articleIndex);
		return axios.post("/metaData", { articleIndex: articleIndex });
	},

	getSavedArticles(saved){
		console.log("in helpers - get saved articles");
		return axios.get("/saved");
	},

	postDeleteArticle(deleteId){
		console.log("in helpers - post delete articles");
		console.log(deleteId);
		return axios.post("/delete", { deleteIndex: deleteId });
	}

// end helper
};

// We export the API helper
module.exports = helper;
