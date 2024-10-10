import userModel from "../db/models/user.model.js";
import mongoose from "mongoose";
export const updateCountry = async (req, res) => {
  try {
    const { country, id, flag } = req.body;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.country = country;
    user.flag = flag;
    user.city = "";

    await user.save();
    res.status(200).json({
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log("error in updateCountry controller", error.message);
  }
};

export const updateCurrency = async (req, res) => {
  try {
    const { currency, id } = req.body;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.currency = currency;
    await user.save();
    res.status(200).json({
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log("error in updateCountry controller", error.message);
  }
};

export const updateProfile = async (req, res) => {
  const { profilePic, username, firstName, lastName, id } = req.body;
  console.log(id);
  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const existingUser = await userModel.findOne({ username });
    if (existingUser)
      return res.status(400).json({ message: "username already exists" });

    if (username.length < 4)
      return res.status(401).json({ message: "username too short" });
    user.username = username;
    user.firstName = firstName;
    user.lastName = lastName;
    user.profilePic = profilePic;
    await user.save();
    res.status(200).json({
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log("Error in update profile controller", error.message);
  }
};

export const updateAddress = async (req, res) => {
  try {
    const { username } = req.params;
    const { city, street, building, apartmentNumber } = req.body;

    const user = await userModel.findOne({ username });
    console.log(username);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.city = city;
    user.street = street;
    user.building = building;
    user.apartmentNumber = apartmentNumber;
    await user.save();
    res.status(200).json({
      message: "Address updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log("error in updateAddress controller", error.message);
  }
};
