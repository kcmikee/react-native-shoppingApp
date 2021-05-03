import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/qmart", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const PORT = process.env.PORT || 5000;

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  res.send("Hellow world");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
