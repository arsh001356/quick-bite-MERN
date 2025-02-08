import express from "express"
import dotenv from "dotenv"
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './routes/user.route.js'
import BookTableRoute from "./routes/bookTable.route.js"
import BookingRoute from "./routes/booking.route.js"


const app = express();
app.use(express.json())
app.use(cors())
dotenv.config()

const port = process.env.PORT || 3000;
const mongoDbUri = process.env.MONGO_DB_URI

main().then(() => { console.log("DB connected") }).catch(err => console.log(err));

async function main() {
    await mongoose.connect(mongoDbUri);

}

app.get('/', (req, res) => {
    res.send('api working');
});
app.use("/user", userRoute)
app.use(BookTableRoute)
app.use(BookingRoute)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
