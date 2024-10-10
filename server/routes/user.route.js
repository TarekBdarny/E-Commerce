import express from "express";
import {
  updateCountry,
  updateCurrency,
  updateProfile,
  updateAddress,
} from "../controllers/user.controller.js";

const router = express.Router();

router.patch("/update-country", updateCountry);
router.patch("/update-currency", updateCurrency);
router.patch("/update/profile/:id", updateProfile);
router.patch("/update/:username/address", updateAddress);

export { router as userRouter };
