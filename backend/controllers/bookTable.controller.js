import BookTable from "../models/bookTable.model.js";

export const tableBooking = async (req, res) => {
    try {
        const { name, contact, guests, date, time } = req.body;

        if (!name || !contact || !guests || !date || !time) {
            return res.status(400).json({ msg: "All fields are required" });
        }


        const existingBooking = await BookTable.findOne({ name, date, time });
        if (existingBooking) {
            return res.status(400).json({ msg: "Booking already exists for the given details" });
        }

        const newBooking = new BookTable({
            name,
            date,
            time,
            contact,
            guests,
        });

        await newBooking.save();

        console.log("New booking created:", newBooking);
        res.status(200).json({ message: "Booking successful", bookingId: newBooking._id });
    } catch (error) {
        console.error("Error while booking:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
