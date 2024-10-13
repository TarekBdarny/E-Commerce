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
    number: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    cvc: {
      type: String,
      required: true,
    },
    cardCompany: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const creditCardModel = mongoose.model("CreditCard", creditCardSchema);
export default creditCardModel;
