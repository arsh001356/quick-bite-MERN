import express from "express"
import { bookings } from "../controllers/bookings.controller.js"
const router = express.Router()
router.get("/booking/:id", bookings)
export default router;