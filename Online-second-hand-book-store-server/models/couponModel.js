const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
      },
  name: {
    type: String,
    required: [true],
    unique: true,
  },
  nprice: {
    type: Number,
    required: [true]
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
