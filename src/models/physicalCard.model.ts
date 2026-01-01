import mongoose, { Schema } from "mongoose";
import { IPhysicalCard } from "../types/physicalCard.types";

const PhysicalCardSchema = new Schema<IPhysicalCard>(
  {
    cardUid: {
      type: String,
      required: true, // without card uid the data should now be saved
      unique: true, // card uid must be unique to avoid duplicate cards
      trim: true, // removed whitespace from start and end of the string
      index: true, // created a index this helps the mongodb find the data faster
    },

    profileID: {
      type: Schema.ObjectId,
      required: true,
      ref: "Profile",
      index: true, // for searching through the database
    },

    status: {
      type: String,
      enum: ["active", "lost", "disabled"],
      default: "active",
    },
    issuedAt: {
      type: Date,
      default: Date.now,
    },

    disabledAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const PhysicalCardModel =
  mongoose.models.PhysicalCard ||
  mongoose.model<IPhysicalCard>("PhysicalCard", PhysicalCardSchema);
