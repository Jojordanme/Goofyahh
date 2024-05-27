const { model, Schema } = require("mongoose");

let warningSchema = new Schema({
  Guild: String,
  User: String,
  NCount: Number,
  Reputation: Number,
  
});

module.exports = model("stats", warningSchema);