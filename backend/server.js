import express from "express";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";
import orderRoutes from "./routes/orderRoutes.js";
dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
