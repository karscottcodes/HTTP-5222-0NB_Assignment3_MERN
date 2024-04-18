const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || "3000";

const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/`;
const client = new MongoClient(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(
	cors({
		origin: "*",
	})
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //need this line to be able to receive/parse JSON from request

//allow requests from all servers

//set up server listening
app.listen(port, () => {
	console.log(`BE on http://localhost:${port}`);
});

//MongoDB functions
async function connection() {
	try {
		await client.connect();
		console.log("Connected to the database");
		return client.db("karscottcodes");
	} catch (error) {
		console.error("Error connecting to the database:", error);
		throw error;
	}
}

//API endpoints
//menuLinks
app.get("/api/menuLinks", async (request, response) => {
	try {
		const db = await connection();
		const links = await db.collection("menuLinks").find({}).toArray();
		response.json(links);
	} catch (error) {
		console.error("Error fetching menu links:", error);
		response.status(500).json({ error: "Internal server error" });
	}
});

//projects
app.get("/api/projects", async (request, response) => {
	try {
		const db = await connection();
		const projects = await db.collection("projects").find({}).toArray();
		response.json(projects);
	} catch (error) {
		console.error("Error fetching projects:", error);
		response.status(500).json({ error: "Internal server error" });
	}
});

//experiences
app.get("/api/experiences", async (request, response) => {
	try {
		const db = await connection();
		const experiences = await db
			.collection("experiences")
			.find({})
			.toArray();
		response.json(experiences);
	} catch (error) {
		console.error("Error fetching experiences:", error);
		response.status(500).json({ error: "Internal server error" });
	}
});

//experiences
app.get("/api/educations", async (request, response) => {
	try {
		const db = await connection();
		const educations = await db
			.collection("educations")
			.find({})
			.toArray();
		response.json(educations);
	} catch (error) {
		console.error("Error fetching educations:", error);
		response.status(500).json({ error: "Internal server error" });
	}
});

//badges
app.get("/api/badges", async (request, response) => {
	try {
		const db = await connection();
		const badges = await db
			.collection("badges")
			.find({})
			.toArray();
		response.json(badges);
	} catch (error) {
		console.error("Error fetching badges:", error);
		response.status(500).json({ error: "Internal server error" });
	}
});

//contactform

// Contact Form endpoint
app.post("/api/contact", async (request, response) => {
    try {
        const db = await connection();
        const { contact_name, contact_email, contact_message } = request.body;
        await db.collection("contactForm").insertOne({ contact_name, contact_email, contact_message });
        response.status(201).json({ message: "Contact form submitted successfully" });
    } catch (error) {
        console.error("Error submitting contact form:", error);
        response.status(500).json({ error: "Internal server error" });
    }
});