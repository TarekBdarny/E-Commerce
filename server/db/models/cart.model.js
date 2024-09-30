import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    total: {
      type: Number,
    },
    subTotal: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    coupon: {
      type: String,
    },
    address: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  },
  { timestamps: true }
);

const cartModel = mongoose.model("Cart", cartSchema);
export default cartModel;
