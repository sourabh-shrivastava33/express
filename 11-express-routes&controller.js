const express = require("express");
const app = express();
const people = require("./routes/peopleRoutes");
const login = require("./routes/auth");
app.use(express.static("./methods-public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/people", people);
app.use("/login", login);
app.listen(4000, () => {
	console.log("app is listening to port 4000");
});
