const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
      },
  token: {
    type: String,
    required: [true],
  }
},{timestamps: true});
tokenSchema.index({createdAt: 1},{expireAfterSeconds: 3600});
const Token = mongoose.model("Token", tokenSchema);
module.exports = Token;
