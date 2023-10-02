const express = require("express");
const path = require("path");
const app = express();

// this single line of code will tell express to handle the styles.css, logo.svg  and browser-app.js file issue that we solved in http-app.js using some 7,8 line of codes
app.use(express.static("./public"));

app.get("/", (req, res) => {
	res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});
app.listen(4000, () => {
	console.log("app is listening to port 4000");
});
