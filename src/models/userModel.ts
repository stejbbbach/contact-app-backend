import { Schema, model } from 'mongoose';

export interface IUser {
    uid: string;
    name: string;
    email: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    uid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = model<IUser>('User', userSchema);

export default User;
