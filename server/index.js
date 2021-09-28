// Setup Dependencies and constants
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000;
const app = express();

// Spin up the server and listen on port 3000
app.listen(port);
app.use(express.json());

// Enable cross-origin resource sharing
app.use(cors());

app.get("/test", (req, res) => {
	res.send({
		timestamp: Date.now(),
		code: 200,
		message: "Succesfully responded the /test endpoint.",
		host: `${port}`,
	});
});

// Create an endpoint to GET /skills, should return an object with skills and ratings:
// { node: 7, html: 6 }
app.get("/skills", (req, res) => {
	res.send([
		{
			id: 1,
			technology: "React",
			rating: 7,
		},
		{
			id: 2,
			technology: "Node/Express",
			rating: 6,
		},
		{
			id: 3,
			technology: "Redux",
			rating: 8,
		},
		{
			id: 4,
			technology: "CSS/Sass",
			rating: 10,
		},
		{
			id: 4,
			technology: "Threat Modelling",
			rating: 10,
		},
	]);
});
console.log(`Node Express Same API listening on port ${port}`);
