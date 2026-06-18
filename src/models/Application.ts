// ============================================
// Techglaz Labs — Application Mongoose Model
// ============================================

import mongoose, { Schema, type Document, type Model } from "mongoose";

export interface IApplication extends Document {
  userId?: mongoose.Types.ObjectId;
  fullName: string;
  email: string;
  phone: string;
  branch: string;
  course: string;
  trainingTrack: string;
  institution?: string;
  yearOrExperience?: string;
  message?: string;
  referralSource?: string;
  status: "pending" | "under_review" | "accepted" | "rejected";
  referenceNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

const ApplicationSchema = new Schema<IApplication>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    branch: {
      type: String,
      required: [true, "Engineering branch is required"],
      enum: ["CSE_IT", "EE", "ECE", "ME", "CIVIL"],
    },
    course: {
      type: String,
      required: [true, "Course selection is required"],
      trim: true,
    },
    trainingTrack: {
      type: String,
      required: [true, "Training track is required"],
      enum: ["Teachers' School", "Teachers' College", "Students", "General"],
    },
    institution: {
      type: String,
      trim: true,
    },
    yearOrExperience: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
    referralSource: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "under_review", "accepted", "rejected"],
      default: "pending",
    },
    referenceNumber: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for querying user's applications
ApplicationSchema.index({ userId: 1, createdAt: -1 });
ApplicationSchema.index({ email: 1 });
ApplicationSchema.index({ referenceNumber: 1 });

const Application: Model<IApplication> =
  mongoose.models.Application ||
  mongoose.model<IApplication>("Application", ApplicationSchema);

export default Application;
