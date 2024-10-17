import creditCardModel from "../db/models/creditCard.model.js";
import userModel from "../db/models/user.model.js";
import bcrypt from "bcrypt";
export const createCreditCard = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, number, month, year, cvc, cardCompany } = req.body;

    const user = await userModel.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const hashedNumber = await bcrypt.hash(number, 10);
    const hashedCvc = await bcrypt.hash(cvc, 10);
    const card = new creditCardModel({
      cardOwner: id,
      number: hashedNumber,
      name,
      month,
      year,
      cvc: hashedCvc,
      cardCompany,
      lastFourDigits: number.slice(-4),
    });
    await card.save();

    res.status(201).json({ message: "Card created successfully", data: card });
  } catch (error) {
    res.status("500").json({ message: "Something went wrong" });
    console.log("Error in createCreditCard controller: ", error.message);
  }
};
export const getAllCreditCards = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const cards = await creditCardModel.find({ cardOwner: id });

    if (cards.length === 0)
      return res.status(200).json({ message: "No cards found", data: [] });
    else {
      return res.status(200).json({ message: "Cards found", data: cards });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error });
    console.log("Error in getAllCreditCards controller: ", error);
  }
};
export const deleteCreditCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await creditCardModel.findByIdAndDelete(id);
    if (!card) return res.status(404).json({ message: "Card not found" });
    return res.status(200).json({ message: "Card deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log("Error in deleteCreditCard controller: ", error);
  }
};
export const activateCard = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.body;

  try {
    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    const userCard = await creditCardModel.updateOne(
      {
        $and: [{ cardOwner: userId }, { _id: id }],
      },
      { $set: { activated: true } }
    );
    const deactivateCards = await creditCardModel.updateMany(
      {
        cardOwner: userId,
        _id: { $ne: id },
      },
      { $set: { activated: false } }
    );
    const cards = await creditCardModel.find({ cardOwner: userId });
    res
      .status(200)
      .json({ message: "Card activated successfully", data: cards });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log("Error in activateCard controller: ", error);
  }
};
export const validateCardCvc = async (req, res) => {
  const { id } = req.params;
  const { cvc } = req.body;
  try {
    const card = await creditCardModel.findById(id);
    const isMatch = await bcrypt.compare(cvc, card?.cvc || "");
    res.status(200).json({
      message: !isMatch && "CVC does not match",
      data: isMatch,
    });
    console.log(isMatch);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log("Error in validateCardCvc controller: ", error.message);
  }
};
