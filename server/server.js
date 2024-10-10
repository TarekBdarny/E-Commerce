import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { authRouter } from "./routes/auth.route.js";
import connectMongo from "./utils/connectMongo.js";
import { userRouter } from "./routes/user.route.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  connectMongo();
  console.log(`Server running on port ${PORT}`);
});
