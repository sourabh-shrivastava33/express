const express = require("express");
const { products } = require("./data");
const app = express();
// Making our first basic api
app.get("/", (req, res) => {
	res.json(products);
});
app.listen(4000, () => {
	console.log("app is listening to 4000");
});
