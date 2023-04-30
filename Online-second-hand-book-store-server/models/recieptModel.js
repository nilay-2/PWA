const mongoose = require("mongoose");

const prodSchema = new mongoose.Schema({
    prod: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
      },
  quantity: {
    type: Number,
    required: [true],
  }
});

const recieptSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
  products: [
    prodSchema
  ]
},{timestamps: true});
recieptSchema.index({createdAt: 1},{expireAfterSeconds: 3600});
const Reciept = mongoose.model("Reciept", recieptSchema);
module.exports = Reciept;
