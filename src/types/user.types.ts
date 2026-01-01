import { Document, Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId; // mongoose handles it if its not explicitly defied but its recommended to have consistency and code clarity;

  phone: string; // UNIQUE
  email?: string;

  role: "guardian" | "admin";

  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}
