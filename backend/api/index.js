// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const { login } = require("./routes/login,js");
// const { register } = require("./routes/login,js");
// const app = express();
// const port = process.env.PORT || 3000;

// // Connect to MongoDB with error handling
// mongoose
//   .connect(process.env.MONGODBURL)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// app.use(express.json());
// app.use(cors({ origin: "*" })); // Consider a more restrictive origin for production

// // Root route with potential optimization based on use case
// app.get("/", async (req, res) => {
//   return res.json("welcome");
// });
// app.post("/login", login);
// app.post("/signup", register);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;