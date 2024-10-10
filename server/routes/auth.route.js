import express from "express";
import { login, register, logout } from "../controllers/auth.controller.js";
import { test } from "../controllers/test.js";
const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);
// router.get("/test", test);

export { router as authRouter };
