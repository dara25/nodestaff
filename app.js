const express = require("express");
const cors = require("cors");
const db = require("./config/dbConfig");

// read the .env file
require("dotenv").config();
const { PORT } = process.env;

// test database connection
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

const app = express();

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("working");
});

app.use("/api/staffs", require("./routes/staffs"));

const port = PORT || 3354;
app.listen(port, () => console.log(`Listinging on port ${port}...`));
