import express from "express";

const router = express.Router();

router.get("/login", () => {
  console.log("login endpoint");
});
router.get("/logout", () => {
  console.log("logout endpoint");
});
router.get("/register", () => {
  console.log("register endpoint");
});

export { router as authRouter };
