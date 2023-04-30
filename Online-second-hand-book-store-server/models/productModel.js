const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a name!"],
  },
  price: {
    type: Number,
    required: [true, "Please provide an Email ID"],
  },
  image: {
    type: String,
    required: [false],
  },
  condition: {
    type: String,
    required: [true,"Mention Condition"],
  },
  author: {
    type: String,
    required: [true,"Please Mention Author"],
  },
  pages: {
    type: Number,
    required: [true,"Please Mention Pages"],
  },
  pyear: {
    type: Number,
    required: [false],
  },
  publication: {
    type: String,
    required: [false],
  },
  description: {
    type: String,
    required: [false],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
},{timestamps:true});

productSchema.index({ "title": "text", "description": "text", "category": "text" });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
