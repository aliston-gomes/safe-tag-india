import { Document, Types } from "mongoose";

export interface IEmergencyProfile extends Document {
  _id: Types.ObjectId;

  profileId: Types.ObjectId; // FK → Profile

  displayName: string; // e.g. "Ayaan G." or "Aliston G."

  bloodGroup?: string;

  allergies: string[];
  criticalConditions: string[];
  currentMedications: string[];
  medicalDevices: string[];

  specialInstructions?: string;

  showPhoto: boolean;

  lastUpdatedAt: Date;

  createdAt: Date;
  updatedAt: Date;
}
