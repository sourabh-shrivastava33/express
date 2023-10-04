const express = require("express");
const app = express();

app.use(express.static("./public"));

//---- We can even skip sending the html file to "/" route by just moving that index.html inside public folder as server will find the index.html as its entry point--//

// app.get("/", (req, res) => {
// 	res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

app.all("*", (req, res) => {
	res.status(404).send("page not found");
});
app.listen(4000, () => {
	console.log("App is listening to port 4000");
});
