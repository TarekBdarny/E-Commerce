import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    profilePic: {
      type: String,
    },
    businessAccount: {
      type: Boolean,
      default: false,
    },
    isNewUser: {
      type: Boolean,
      default: true,
    },
    freeShipping: {
      type: Boolean,
      default: true,
    },
    likedProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
