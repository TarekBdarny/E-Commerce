import creditCardModel from "../db/models/creditCard.model";
import userModel from "../db/models/user.model.js";
export const createCreditCard = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, number, month, year, cvc, cardCompany } = req.body;

    const user = await userModel.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const card = new creditCardModel({
      cardOwner: id,
      number,
      name,
      month,
      year,
      cvc,
      cardCompany,
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
      return res.status(404).json({ message: "No cards found", data: [] });
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
