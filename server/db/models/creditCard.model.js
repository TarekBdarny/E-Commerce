import mongoose from "mongoose";

const creditCardSchema = new mongoose.Schema(
  {
    cardOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    expirationDate: {
      type: String,
      required: true,
    },
    securityCode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const creditCardModel = mongoose.model("CreditCard", creditCardSchema);
export default creditCardModel;
