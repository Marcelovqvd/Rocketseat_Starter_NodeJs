const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
  title: {
    title: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createat: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema); 