import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true, unique: true },
    productCover: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Array, required: true, default: [] },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    backgroundColor: { type: String, required: true },
    navTintColor: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);
export default Product;
