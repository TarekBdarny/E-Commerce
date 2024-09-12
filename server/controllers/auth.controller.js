import userModel from "../db/models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const {
      username,
      password,
      confirmPassword,
      gender,
      email,
      fullName,
      avatar,
      bio,
      age,
    } = req.body;
    const user = await userModel.findOne({ username });
    if (user) {
      return res.status(401).json({ message: "username already exists" });
    }
    const user2 = await userModel.findOne({ email });
    if (user2) {
      return res.status(401).json({ message: "email already exists" });
    }
    if (password !== confirmPassword) {
      return res.status(401).json({ message: "passwords do not match" });
    }
    if (age < 18)
      return res
        .status(403)
        .json({ message: "You must be at least 18 years old to register" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      username,
      password: hashedPassword,
      gender,
      email,
      fullName,
      avatar,
      bio,
      age,
    });
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error in Register");
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username: username });
    if (!user) {
      return res.status(401).send("username not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send("wrong password");
    }
    //generateCookiesWithJWT()
    const { password: _, ...loggedUser } = user;

    return res.status(200).json(loggedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error in Login");
  }
};
export const logout = async (req, res) => {};
