import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

// Login or Register
export const login = async (req, res) => {
    try {
        const { name, email, phoneNumber, avatar } = req.body;

        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ name, email, phoneNumber, avatar });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        });

        res.status(200).json({
            success: true,
            message: "User login successfully",
            user,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

// ✅ Get Logged-In User (Full User Data)
export const getUser = async (req, res) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized",
            });
        }

        // Decode the token to get user ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user by ID and exclude sensitive fields like password if present
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};
