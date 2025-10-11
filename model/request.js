const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  pcModel: String,
  issueDescription: { type: String, required: true },
  repairDate: Date,
  budget: String,
  status: {
    type: String,
    enum: ["Pending", "In progress", "Completed", "rejected"],
    default: "Pending",
  },
});

module.exports = mongoose.model("Request", requestSchema);
