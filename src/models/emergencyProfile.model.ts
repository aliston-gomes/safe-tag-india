import mongoose, { Schema } from "mongoose";
import { IEmergencyProfile } from "../types/emergency.types";

const EmergencyProfileSchema = new Schema<IEmergencyProfile>(
  {
    profileId: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
      unique: true, // ONE emergency profile per person
    },

    displayName: {
      type: String,
      required: true,
      trim: true,
    },

    bloodGroup: {
      type: String,
      trim: true,
    },

    allergies: {
      type: [String],
      default: [],
    },

    criticalConditions: {
      type: [String],
      default: [],
    },

    currentMedications: {
      type: [String],
      default: [],
    },

    medicalDevices: {
      type: [String],
      default: [],
    },

    specialInstructions: {
      type: String,
      trim: true,
    },

    showPhoto: {
      type: Boolean,
      default: true,
    },

    lastUpdatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// 🔒 Prevent accidental full-document updates without intent
EmergencyProfileSchema.pre("save", async function () {
  this.lastUpdatedAt = new Date();
});

export const EmergencyProfileModel =
  mongoose.models.EmergencyProfile ||
  mongoose.model<IEmergencyProfile>("EmergencyProfile", EmergencyProfileSchema);
