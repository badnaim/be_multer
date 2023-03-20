import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: String,
  age: Number,
  phoneNumber: Number,
  email: String,
  password: String,
  status: String,
});

const Users = mongoose.model("users", userSchema);

export default Users;
