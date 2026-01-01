import mongoose from "mongoose";
import { IUser } from "../types/user.types";

const Schema = mongoose.Schema;

const UserSchema = new Schema<IUser>(
  {
    phone: {
      type: String,
      required: true,
      unique: true, // this creates a index by default in the mongodb database
      trim: true,
    },
    email: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ["guardian", "admin"],
      default: "guardian",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IUser>("User", UserSchema);
