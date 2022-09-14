const { Schema, model } = require("mongoose");

const userSchema = Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default:null,
  },
  token: {
    type: String,
    default: null,
  },
});

const User = model("user", userSchema);

module.exports = { User };
