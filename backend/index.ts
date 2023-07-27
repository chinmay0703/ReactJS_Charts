const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;

const allowedOrigins = ["http://localhost:3000/"];

app.use(cors());

app.use(bodyParser.json());

const mongoURI = "mongodb://127.0.0.1:27017/wathare_database";
mongoose
  .connect(mongoURI, {
    connectTimeoutMS: 1000,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/api/data", (req, res) => {
  console.log("hello");
  const data = {
    message: "Hello from the server!",
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
