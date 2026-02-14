import express from "express";
import { registerSociety } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerSociety);

export default router;
