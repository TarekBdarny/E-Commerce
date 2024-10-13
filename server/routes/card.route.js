import express from "express";
import {
  createCreditCard,
  deleteCreditCard,
  getAllCreditCards,
} from "../controllers/creditCard.controller.js";

const router = express.Router();

router.post("/create/:id", createCreditCard);
router.get("/get/cards/:id", getAllCreditCards);
router.delete("/delete/card/:id", deleteCreditCard);

export { router as cardRouter };
