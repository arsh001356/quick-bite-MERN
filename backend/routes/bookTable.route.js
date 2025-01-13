import express from "express";
import { tableBooking } from "../controllers/bookTable.controller.js";
const router = express.Router()

router.post("/booktable", tableBooking)

export default router;