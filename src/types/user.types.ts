import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;

  phone: string; // UNIQUE
  email?: string;

  role: "guardian" | "admin";

  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}
