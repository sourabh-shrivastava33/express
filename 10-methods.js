const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
	res.status(200).json({ success: true, data: people });
});
app.post("/api/people", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "Provide write credentials" });
	}
	res.status(201).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(201).json({ success: true, data: [...people, name] });
	}
	res.status(400).json({ success: false, data: "" });
});

app.post("/login", (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	}
	return res.status(400).send("Provide correct credentials");
});

app.put("/api/people/:id", (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	const person = people.find((person) => person.id === Number(id));
	if (!person) {
		return res.status(404).send(`person with id ${id} not found`);
	}
	const newPerson = people.map((person) => {
		if (person.id === Number(id)) {
			person.name = name;
		}
		return person;
	});
	res.status(200).json({ success: true, data: newPerson });
});
app.delete("/api/people/:id", (req, res) => {
	const person = people.find((person) => person.id === Number(req.params.id));
	if (!person) {
		return res.status(404).json({
			success: false,
			msg: `person with id ${req.params.id} not found`,
		});
	}
	const newPerson = people.filter(
		(person) => person.id !== Number(req.params.id)
	);
	res.status(200).json({ success: true, data: newPerson });
});

app.listen(4000, () => {
	console.log("app is listening to port 4000");
});
