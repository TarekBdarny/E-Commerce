import mongoose from "mongoose";

const userSchema = new mongoose.Schema({}, { timestamps: true });

const userModel = mongoose.model("User", userSchema);
export default userModel;
