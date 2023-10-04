const express = require("express");
const app = express();
// keep in mind middleware get access to req ,res and next for each route and if we are not giving any response from a middleware we should call next method so that it will move to next middelware
const logger = (req, res, next) => {
	const { method, url } = req;
	const time = new Date().getFullYear();
	console.log(method, url, time);
	next();
};

app.get("/", logger, (req, res) => {
	// Now if we want this log after each req to every route and there are multiple route so it will be a bad practice to copy and paste this code every where instead we can make a middleware which gets hit between each request and response of each route

	// const { method, url } = req;
	// const time = new Date().getFullYear();
	// console.log(method, url, time);
	res.send("home page");
});

app.get("/about", logger, (req, res) => {
	res.send("about");
});
app.listen(4000, () => {
	console.log("app listening at port 4000");
});
