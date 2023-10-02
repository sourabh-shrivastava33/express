const express = require("express");
const app = express();
app.get("/", (req, res) => {
	console.log("user hit the server");
	res.status(200).send("<h1>Home page</h1>");
});

app.get("/about", (req, res) => {
	console.log("user hit the about route server");
	res.status(200).send("<h1>About page</h1>");
});

app.all("*", (req, res) => {
	res.status(404).send("<h1>Page not found </h1>");
});

app.listen(4000, () => {
	console.log("app is listening to port 4000");
});
