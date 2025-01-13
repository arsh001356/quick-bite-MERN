import BookTable from "../models/bookTable.model.js";
export const bookings = async (req, res) => {
    const { id } = req.params
    const userBooking = await BookTable.findOne({ _id: id })
    try {

        res.send(userBooking)

    } catch (error) {
        console.log(error)
    }

}