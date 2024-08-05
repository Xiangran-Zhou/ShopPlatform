import express from "express";
import products from "./data/products.js";
import cors from "cors";

const app = express();
const port = 8001;

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
