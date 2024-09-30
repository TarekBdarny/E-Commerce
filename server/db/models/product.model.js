import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    owner: {
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
    rating: {
      type: Number,
    },
    usersRatingCount: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    company: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: [],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
    },
    colors: Array,
    posterImage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);
const productModel = mongoose.model("Product", productSchema);
export default productModel;
