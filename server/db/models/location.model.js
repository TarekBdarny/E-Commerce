import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    houseNumber: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const locationModel = mongoose.model("Location", locationSchema);
export default locationModel;
