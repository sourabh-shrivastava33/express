const express = require("express");
const app = express();
const { logger } = require("./logger");
const { authorize } = require("./authorize");
// so for using multiple middleware use an array
app.use([logger, authorize]);

app.get("/", (req, res) => {
	res.send("Home page");
});
app.get("/about", (req, res) => {
	res.send("About");
});
app.get("/product", (req, res) => {
	console.log(req.user);
	res.send("Product");
});
app.listen(4000, () => {
	console.log("app is listening as port 4000");
});
