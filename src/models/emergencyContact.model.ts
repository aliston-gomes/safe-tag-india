import mongoose, { Schema } from "mongoose";
import { IEmergencyContact } from "../types/emergencyContact.types";

const EmergencyContactSchema = new Schema<IEmergencyContact>(
  {
    profileId: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    relationship: {
      type: String,
      enum: [
        "father",
        "mother",
        "guardian",
        "spouse",
        "sibling",
        "relative",
        "friend",
        "doctor",
        "other",
      ],
      required: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    isPrimary: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// ⚠️ Enforce ONLY ONE primary contact per profile
EmergencyContactSchema.index(
  { profileId: 1, isPrimary: 1 },
  { unique: true, partialFilterExpression: { isPrimary: true } }
);

export const EmergencyContactModel =
  mongoose.models.EmergencyContact ||
  mongoose.model<IEmergencyContact>("EmergencyContact", EmergencyContactSchema);
