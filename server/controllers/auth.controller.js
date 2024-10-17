import mongoose from "mongoose";
import userModel from "../db/models/user.model.js";
import bcrypt from "bcrypt";
import { promises as fs } from "fs";

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
    const user = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (user) return res.status(400).json({ message: "user already exists" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const colors = [
      "000",
      "6ab04c",
      "f39c12 ",
      "ff6b6b",
      "68A691",
      "694F5D",
      "9fbfc8",
      "fef65b",
      "588163",
    ];
    let ProfilePicWithInitialsUrl = `https://avatar.oxro.io/avatar.svg?name=${firstName}+${lastName}&background=${
      colors[Math.floor(Math.random() * colors.length)]
    }&caps=3&bold=true`;
    const newUser = new userModel({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      gender,
      profilePic: profilePic || ProfilePicWithInitialsUrl,
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
const convertImageToBase64 = async (name) => {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&size=128&background=FF5733&color=FFFFFF&rounded=true&bold=true`;
  try {
    const response = await fetch(avatarUrl);
    const arrayBuffer = await response.arrayBuffer(); // Get the avatar as an ArrayBuffer
    const buffer = Buffer.from(arrayBuffer); // Convert ArrayBuffer to Buffer
    const base64Image = buffer.toString("base64"); // Convert Buffer to Base64
    return base64Image;
  } catch (err) {
    throw new Error(`Error fetching or converting image: ${err.message}`);
  }
};
