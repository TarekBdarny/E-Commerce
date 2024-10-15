import userModel from "../db/models/user.model.js";

export const activateBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.businessAccount = true;
    await user.save();
    res
      .status(200)
      .json({ message: "Business account activated successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log("Error in activateBusiness controller", error.message);
  }
};
