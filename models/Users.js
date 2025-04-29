const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    age: Number,
  },
  { timestamps: true }
);
const UserModel = mongoose.models.users || mongoose.model("users", UserSchema);
module.exports = UserModel;
