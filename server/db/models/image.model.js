import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    src: {
      type: String,
      required: true,
    },
    use: {
      enum: ["product", "profilePic"],
    },
  },
  { timestamps: true }
);

const imageModel = mongoose.model("Image", imageSchema);
export default imageModel;
