import express from "express";
import {
  updateCountry,
  updateCurrency,
  updateProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.patch("/update-country", updateCountry);
router.patch("/update-currency", updateCurrency);
router.patch("/update/profile/:id", updateProfile);

export { router as userRouter };
