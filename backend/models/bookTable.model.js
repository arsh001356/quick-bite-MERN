import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookTableSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,

    },
    time: {
        type: String,
        required: true,

    },
    contact: {
        type: Number,
        required: true,
    },
    guests: {
        type: Number,
        required: true,
    }

})
const BookTable = mongoose.model("BookTable", bookTableSchema)

export default BookTable