import { Model, model, Schema } from "mongoose";
import { IUser, UserMethods } from "./user.interface";

 
// 2. Create a Schema corresponding to the document interface.
export const userSchema = new Schema<IUser,Model<IUser>,UserMethods>({
  id: { type: Number },
  name: {
    firstname: { type: String },
    lastname: { type: String },
  },
  role: { type: String, required: true },
  age: { type: Number, required: true },
  proffesion: { type: String },
  gender: { type: String, required: true },
  email: { type: String, required: true },
});


userSchema.method('updateName', function updateName(name) {
  this.name = name;
  return this.save();
});
// 3. Create a Model.
//model-> <interface name> -> (modelname , schemaname)
export const User = model<IUser,Model<IUser>>("Users", userSchema);

