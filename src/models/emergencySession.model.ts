import mongoose, { Schema } from "mongoose";
import { IEmergencySession } from "../types/emergencySession.types";

const EmergencySessionSchema = new Schema<IEmergencySession>(
  {
    profileId: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
      index: true,
    },

    cardId: {
      type: Schema.Types.ObjectId,
      ref: "PhysicalCard",
      required: true,
      index: true,
    },

    sessionTokenHash: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    expiresAt: {
      type: Date,
      required: true,
      index: true,
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

// 🔥 Automatically remove expired sessions
EmergencySessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const EmergencySessionModel =
  mongoose.models.EmergencySession ||
  mongoose.model<IEmergencySession>("EmergencySession", EmergencySessionSchema);
