import express from "express";
import { signUp, signIn } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", signIn);

export default router;
