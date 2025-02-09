import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import BookTableRoute from "./routes/bookTable.route.js";
import BookingRoute from "./routes/booking.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoDbUri = process.env.MONGO_DB_URI;


const Development_frontend = process.env.DEV_FRONTEND_URL;
const Deployed_frontend = process.env.DEPLOYED_FRONTEND_URL;


const allowedOrigins = [Development_frontend, Deployed_frontend];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("CORS policy violation"));
            }
        },
        credentials: true,
    })
);

app.use(express.json());


async function main() {
    await mongoose.connect(mongoDbUri);
    console.log("DB connected");
}
main().catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("API working");
});

app.use("/user", userRoute);
app.use(BookTableRoute);
app.use(BookingRoute);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
