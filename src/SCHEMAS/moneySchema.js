const { model, Schema } = require("mongoose");

let warningSchema = new Schema({
  Guild: String,
  User: String,
  Money: Number,
  Health: Number,
  Inventory: Array,
 
  CriminalHistory: Array,
});

module.exports = model("money", warningSchema);
