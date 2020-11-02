const mongooes = require("mongoose");
const Schema = mongooes.Schema;
const userSchema = new Schema({
  user_id: String,
  name: String,
  age: Number,
  gender: {
    type: Number,
    default: 0,
  },
});
const UserModel = mongooes.model("user", userSchema);
module.exports = UserModel;
