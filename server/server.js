import express from "express";
import dotenv from "dotenv";
import { authRouter } from "./routes/auth.route.js";
import connectMongo from "./utils/connectMongo.js";

const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config();

app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  connectMongo();
  console.log(`Server running on port ${PORT}`);
});
