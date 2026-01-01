import { Document, Types } from "mongoose";

export type ICardStatus = "active" | "lost" | "disabled";

export interface IPhysicalCard extends Document {
  _id: Types.ObjectId;

  cardUid: String;

  profileID: Types.ObjectId;
  status: ICardStatus;

  // dates / history
  issuedAt: Date;
  disabledAt?: Date;

  createdAt: Date;
  updatedAt: Date;
}
