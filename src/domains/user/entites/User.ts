import mongoose, { Document } from 'mongoose';

export interface UserDocument extends Document {
    email: string;
}

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
}, { timestamps: true });

export const User = mongoose.model('User', UserSchema);