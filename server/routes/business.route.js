import express from "express";
import { activateBusiness } from "../controllers/business.controller.js";
const router = express.Router();

router.post("/activate/:id", activateBusiness);

export { router as businessRouter };
