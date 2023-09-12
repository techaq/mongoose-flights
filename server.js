require("dotenv").config();
//Dependencies
const mongoose = require("mongoose");
const Flight = require("./models/flights");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Global Configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const jsxViewEngine = require("jsx-view-engine");

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected!"));
db.on("close", () => console.log("mongo disconnected"));

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

// Middleware
app.use(express.urlencoded({ extended: false }));

//////

// Index route
app.get("/flights", async (req, res) => {
  try {
    const foundFlight = await Flight.find({});
    console.log(foundFlight);
    res.status(200).render("Index", {
      flight: foundFlight,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New route
app.get("/flights/new", (req, res) => {
  console.log("New controller");
  res.render("New");
});

// Create route
app.post("/flights", async (req, res) => {
  try {
    const createdFlight = await Flight.create(req.body);
    res.status(201).redirect("/flights");
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
