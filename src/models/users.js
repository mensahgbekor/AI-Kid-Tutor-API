import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: {type: String, required: true},
    role: {type: String, enum: ["user", "admin"], default: "user"}
}, {timestamps: true});

userSchema.plugin(toJSON);

export const UserModel = model("User", userSchema);