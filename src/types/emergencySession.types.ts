import { Document, Types } from "mongoose";

export interface IEmergencySession extends Document {
  _id: Types.ObjectId;

  profileId: Types.ObjectId; // Person whose data is accessed
  cardId: Types.ObjectId; // PhysicalCard used

  sessionTokenHash: string; // HASHED token (never store raw)
  expiresAt: Date; // Auto-expiry time

  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}
