var React = require("react");

var router = require("react-router");
var Route = router.Route;
var Router = router.Router;
var IndexRoute = router.IndexRoute
var browserHistory = router.browserHistory;
var Main = require("../components/Main");
var Start = require("../components/children/Startpage");


module.exports =  (
	<Router history = {browserHistory}>
		<Route path = "/" component={Main}>
			<Route path = "Start" component={Start} />
		</Route>
	</Router>
);
