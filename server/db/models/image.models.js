import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    ownerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    use: {
      type: String,
      enum: ["product", "user"],
      required: true,
    },
  },
  { timestamps: true }
);

const ImageModel = mongoose.model("Image", ImageSchema);
export default ImageModel;
