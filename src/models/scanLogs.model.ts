import mongoose, { Schema } from "mongoose";
import { IScanLog } from "../types/scanLog.types";

const ScanLogSchema = new Schema<IScanLog>(
  {
    cardId: {
      type: Schema.Types.ObjectId,
      ref: "PhysicalCard",
      required: true,
      index: true,
    },

    profileId: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
      index: true,
    },

    emergencySessionId: {
      type: Schema.Types.ObjectId,
      ref: "EmergencySession",
      required: true,
      index: true,
    },

    scannedAt: {
      type: Date,
      default: Date.now,
    },

    city: {
      type: String,
      trim: true,
    },

    deviceType: {
      type: String,
      enum: ["mobile", "desktop", "tablet", "unknown"],
      default: "unknown",
    },

    notifiedGuardian: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const ScanLogModel =
  mongoose.models.ScanLog || mongoose.model<IScanLog>("ScanLog", ScanLogSchema);
