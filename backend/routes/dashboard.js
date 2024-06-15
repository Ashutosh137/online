const mongoose = require("mongoose");
const dashboardSchema = new mongoose.Schema({}, { collection: "dashboard" });
const Dashboard = mongoose.model("Dashboard", dashboardSchema);

exports.dashboard = async (req, res) => {
  const data = await Dashboard.find();
  res.json({ data: data[0] });
};
