const mongoose = require("mongoose");

const schema = mongoose.Schema({
  Place_Name: String,
  Place_Type: String,
  Place_Description: String,
  Contact: String,
  Link: String,
  Best_Time: String,
  Price_Range: String,
  Image: String,
  Facilities: String,
  Activities: String,
  Is_Family_Friendly: Boolean,
  status: { type: String, default: "pending", enum: ["pending", "accepted", "rejected"] },
});

const Addmodel = mongoose.model("Location", schema);

module.exports = Addmodel;
