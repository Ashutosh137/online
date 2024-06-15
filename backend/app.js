require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { login } = require("./routes/login,js");
const { register } = require("./routes/login,js");
const { dashboard } = require("./routes/dashboard");
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB with error handling
mongoose
  .connect(process.env.MONGODBURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", async (req, res) => {
  res.json("welcome");
});
app.get("/data/dashboard", dashboard);
app.post("/login", login);
app.post("/signup", register);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
