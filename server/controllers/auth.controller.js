import mongoose from "mongoose";
import userModel from "../db/models/user.model.js";
import bcrypt from "bcrypt";
// import { generateTokenAndSetCookie } from "../utils/createJWTAndSetCookies.js";
export const register = async (req, res) => {
  const {
    username,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    gender,
    profilePic,
  } = req.body;
  console.log("test");
  try {
    const user = await userModel.findOne({ username });
    if (user)
      return res.status(400).json({ message: "username already exists" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      gender,
      profilePic,
    });

    if (newUser) {
      //   generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
    }
    const userWithoutPassword = { ...newUser, password: "" };
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in register controller", error.message);
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid username" });
    const isMatch = await bcrypt.compare(password, user?.password || "");
    if (!isMatch) return res.status(400).json({ message: "Invalid Password." });

    // generateTokenAndSetCookie(user._id, res);
    const userWithoutPassword = { ...user, password: "" };
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log("Error in login controller: ", error.message);
  }
};
// endpoint for the logout

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller: ", error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};
const convertImageToBase64 = (imageFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // Set up the onload event to convert the image
    reader.onload = () => {
      resolve(reader.result);
    };

    // Handle errors
    reader.onerror = (error) => {
      reject(error);
    };

    // Read the image file as a data URL (Base64)
    reader.readAsDataURL(imageFile);
  });
};
