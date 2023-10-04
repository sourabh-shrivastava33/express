// It is an example in real life we don't authorized like this
const authorize = (req, res, next) => {
	const { user } = req.query;

	if (user === "john") {
		req.user = { name: "john", age: 48 };
		next();
	} else {
		res.status(401).send("Unauthorized");
	}
};
module.exports = { authorize };
