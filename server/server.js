import express from "express";
import dotenv from "dotenv";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import productsRouter from "./routes/products.routes.js";

const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config();

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/products", productsRouter);
