import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  city: { type: String, required: true },
  contact_number: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);
export {User}
