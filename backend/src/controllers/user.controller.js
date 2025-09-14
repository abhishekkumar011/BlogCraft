import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const generateToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRY,
  });
};

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return res
        .status(409)
        .json({ msg: "User with this email already exist" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const token = generateToken(user._id);

    return res
      .status(200)
      .json({ user, token, msg: "User registered Successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res
      .status(500)
      .json({ msg: "Something went wrong while registering the user" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(409).json({ msg: "User does not exists" });
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ msg: "Invalid user credentials" });
    }

    const token = generateToken(user._id);

    return res
      .status(200)
      .json({ user, token, msg: "User logged in Successfully" });
  } catch (error) {
    console.error("Error while logging user ", error);
    return res.status(500).json({ msg: "Error while logging the user" });
  }
};

export { signup, login };
