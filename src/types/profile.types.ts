import { Document, Types } from "mongoose";

export type ProfileType = "guardian" | "child" | "dependent";
export type Gender = "male" | "female" | "other";

export interface IProfile extends Document {
  _id: Types.ObjectId;

  guardianUserId: Types.ObjectId;

  type: ProfileType;

  firstName: string;
  lastName?: string;

  dateOfBirth: Date;
  gender?: Gender;

  photoUrl?: string;
  languages: string[];

  createdAt: Date;
  updatedAt: Date;
}
