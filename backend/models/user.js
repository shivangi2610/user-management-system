// import mongoose from 'mongoose';

// const schema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: {
//     type: String,
//     enum: ['ADMIN', 'MANAGER', 'USER'],
//     default: 'USER',
//   },
//   status: {
//     type: String,
//     enum: ['ACTIVE', 'INACTIVE'],
//     default: 'ACTIVE',
//   },
//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// }, { timestamps: true });

// export default mongoose.model('User', schema);
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);