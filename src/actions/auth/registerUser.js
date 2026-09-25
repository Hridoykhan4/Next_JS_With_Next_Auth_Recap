"use server";

import { collectionNames, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs"; // bcrypt ba bcryptjs import kore nin

export const registerUser = async (payload) => {
  try {
    const usersCollection = dbConnect(collectionNames.TEST_USER);

    // 1. Check if user already exists
    const isExist = await usersCollection.findOne({
      email: payload.email,
    });

    if (isExist) {
      return {
        success: false,
        status: 409,
        message: `${payload.email} already exists`,
      };
    }

    // 2. Hash password with await
    const hashedPassword = await bcrypt.hash(payload.password, 10);

    // 3. Construct new user payload safely
    const newUser = {
      ...payload,
      password: hashedPassword, // Overwrite plain password with hashed password
      role: "user",
      createdAt: new Date().toISOString(),
    };

    // 4. Save to DB
    const result = await usersCollection.insertOne(newUser);

    if (result.acknowledged) {
      return {
        success: true,
        message: `Successfully Registered: ${payload.name}`,
        insertedId: result.insertedId.toString(),
      };
    } else {
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }
  } catch (err) {
    console.error("Register Error:", err);
    return {
      success: false,
      message: "Internal Server Error",
    };
  }
};
