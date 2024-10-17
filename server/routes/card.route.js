import express from "express";
import {
  createCreditCard,
  deleteCreditCard,
  getAllCreditCards,
  activateCard,
  validateCardCvc,
} from "../controllers/creditCard.controller.js";

const router = express.Router();

router.post("/create/:id", createCreditCard);
router.post("/validate/:id", validateCardCvc);
router.post("/activate/:id", activateCard);
router.get("/get/cards/:id", getAllCreditCards);
router.delete("/delete/card/:id", deleteCreditCard);

export { router as cardRouter };
