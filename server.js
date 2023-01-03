// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
// const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
  // console.log(server);
  console.log(`running on localhost: ${port}`);
}

// POST route
app.post("/addWeather", addData);

function addData(req, res) {
  const { newDate, temp, feelings } = req.body;
  projectData.date = newDate;
  projectData.temp = temp;
  projectData.feelings = feelings;
  res.end();
}

// GET route
app.get("/getWeather", sendData);

function sendData(req, res) {
  res.send(projectData);
}
