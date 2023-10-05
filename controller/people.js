const { people } = require("../data");

const getPeople = (req, res) => {
	res.status(200).json({ success: true, data: people });
};
const createPeople = (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "Provide write credentials" });
	}
	res.status(201).json({ success: true, person: name });
};
const createPeoplePostman = (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(201).json({ success: true, data: [...people, name] });
	}
	res.status(400).json({ success: false, data: "" });
};
const updatePeople = (req, res) => {
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
};
const deletePeople = (req, res) => {
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
};
module.exports = {
	createPeople,
	getPeople,
	createPeoplePostman,
	updatePeople,
	deletePeople,
};
