const express = require("express");
const app = express();
const { logger } = require("./logger");
// Remember i bragged about how its a tedious and bad practice for copy pasting that console.log inside each rotue and hence i made a separate logger function and pass it as a middleware don't you think even passing logger for each method function is
// bad practice of repeating  hence we can use app.use()  method

// ---------------------------------------------//
// from express docs
// app.use([path,] callback [, callback...])
// Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
// We can pass the base path also for eg.
// app.use("/api",function foo())
// this middleware hits only if base url is same which is /api
// ---------------------------------------------//

// should be called at top of route before which you want to get your middleware hit
app.use(logger);
app.get("/", (req, res) => {
	res.send("home page");
});
app.get("/about", (req, res) => {
	res.send("About");
});
app.get("/product", (req, res) => {
	res.send("Products");
});
app.listen(4000, () => {
	console.log("app is listening to port 4000");
});
