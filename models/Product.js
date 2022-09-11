const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a hostel name"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    priceone: {
      type: Number,
      required: [true, "Please provide the first price"],
      default: 0,
    },
    pricetwo: {
      type: Number,
      required: [true, "Please provide the second price"],
      default: 0,
    },
    description: {
      type: String,
      required: [true, "Please provide hostel description"],
      maxlength: [1000, "Description can not be more than 1000 characters"],
    },
    imageurl: {
      type: String,
      required: [true, "Please provide image url"],
      trim: true,
    },
    image2: {
      type: String,
      required: [true, "Please provide image url"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please provide product category"],
      enum: ["hostel", "rental"],
    },
    location: {
      type: String,
      required: [true, "Please provide the location"],
    },
    phone: {
      type: String,
      required: [true, "Please provide the location"],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

module.exports = mongoose.model("Product", ProductSchema);
