import { Document, Types } from "mongoose";

export interface IScanLog extends Document {
  _id: Types.ObjectId;

  cardId: Types.ObjectId; // FK → PhysicalCard
  profileId: Types.ObjectId; // FK → Profile
  emergencySessionId: Types.ObjectId; // FK → EmergencySession

  scannedAt: Date;

  city?: string; // Approximate location
  deviceType: "mobile" | "desktop" | "tablet" | "unknown"; // Always has a default value of "unknown"

  notifiedGuardian: boolean;

  createdAt: Date;
  updatedAt: Date;
}
