import mongoose, { Schema, Types, Document } from "mongoose";
import { IProfile } from "../types/profile.types";

const ProfileSchema = new Schema<IProfile>(
  {
    guardianUserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    type: {
      type: String,
      enum: ["guardian", "child", "dependent"],
      required: true,
    },

    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },

    photoUrl: {
      type: String,
    },

    languages: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const ProfileModel =
  mongoose.models.Profile || mongoose.model<IProfile>("Profile", ProfileSchema);
