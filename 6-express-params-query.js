const express = require("express");
const app = express();
const { products } = require("../data");
app.get("/", (req, res) => {
	res.send("<h1>Home page</h1><a href='/api/products'>Products</a>");
});
// Route to get all products
app.get("/api/products", (req, res) => {
	const newProducts = products.map((product) => {
		const { id, image, name } = product;
		return { id, name, image };
	});
	res.json(newProducts);
});
// Route to get single product with particular id
// this can even go complex for example
// /api/products/:productID/reviews/:reviewID

app.get("/api/products/:productID", (req, res) => {
	const { productID } = req.params;
	const singleProduct = products.find(
		(product) => product.id === Number(productID)
	);
	if (!singleProduct) return res.status(404).send("Product Does Not Exit");
	return res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
	let sortedProducts = [...products];
	console.log(sortedProducts);
	const { search, limit } = req.query;
	if (search) {
		sortedProducts = sortedProducts.filter((product) =>
			product.name.startsWith(search)
		);
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, limit);
	}
	if (sortedProducts.length < 1) {
		return res.status(200).json({ success: true, data: [] });
	}
	return res.status(200).json(sortedProducts);
});

app.listen(4000, () => {
	console.log("app is listing to 4000");
});
