"use server";

import { collectionNames, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const registerUser = async (payload) => {
  try {
    const { name, email, password, contactNo, bloodgroup, image } =
      payload || {};

    // Basic Validation Checks
    if (!name || !email || !password) {
      return {
        success: false,
        message: "Name, email, and password are required.",
      };
    }

    if (password.length < 6) {
      return {
        success: false,
        message: "Password must be at least 6 characters long.",
      };
    }

    const cleanEmail = email.toLowerCase().trim();
    const usersCollection =  dbConnect(collectionNames.TEST_USER);

    // 1. Check if user already exists
    const isExist = await usersCollection.findOne({ email: cleanEmail });

    if (isExist) {
      return {
        success: false,
        status: 409,
        message: `${cleanEmail} already exists. Please log in instead.`,
      };
    }

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Construct new user payload safely
    const newUser = {
      name: name.trim(),
      email: cleanEmail,
      contactNo: contactNo?.trim() || "",
      bloodgroup: bloodgroup || "",
      image:
        image?.trim() ||
        "https://i.pinimg.com/236x/7d/ae/3e/7dae3e223e980afe8b47a4f9c085782a.jpg", // Default avatar fallback
      password: hashedPassword,
      role: "user",
      createdAt: new Date().toISOString(),
    };

    // 4. Save to DB
    const result = await usersCollection.insertOne(newUser);

    if (result.acknowledged) {
      return {
        success: true,
        message: `Successfully registered ${newUser.name}!`,
        insertedId: result.insertedId.toString(),
      };
    }

    return {
      success: false,
      message: "Failed to register user. Please try again.",
    };
  } catch (err) {
    console.error("Register Error:", err);
    return {
      success: false,
      message: "Internal server error. Please try again later.",
    };
  }
};
