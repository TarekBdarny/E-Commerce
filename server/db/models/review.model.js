import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    images: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
      },
    ],
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
