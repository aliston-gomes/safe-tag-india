import mongoose, { Document, Types } from "mongoose";

export type EmergencyContactRelationship =
  | "father"
  | "mother"
  | "guardian"
  | "spouse"
  | "sibling"
  | "relative"
  | "friend"
  | "doctor"
  | "other";

export interface IEmergencyContact extends Document {
  _id: Types.ObjectId;

  // reference to profile model
  profileId: Types.ObjectId; // FK → Profile

  name: string;
  relationship: EmergencyContactRelationship;

  phone: string;

  isPrimary: boolean;

  createdAt: Date;
  updatedAt: Date;
}
