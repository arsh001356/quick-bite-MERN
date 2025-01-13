import React, { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

const BookTable = () => {
    const nameRef = useRef(null);
    const dateRef = useRef(null);
    const timeRef = useRef(null);
    const contactRef = useRef(null);
    const guestsRef = useRef(null);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: nameRef.current.value || "",
            date: dateRef.current.value || "",
            time: timeRef.current.value || "",
            contact: contactRef.current.value || "",
            guests: guestsRef.current.value || "",

        };


        try {
            const response = await axios.post(`http://localhost:5000/booktable`, formData);
            toast.success(response.data.message);
            console.log("Booking successful:", response.data.bookingId);
            navigate(`/booking/${response.data.bookingId}`)




            nameRef.current.value = "";
            dateRef.current.value = "";
            timeRef.current.value = "";
            contactRef.current.value = "";
            guestsRef.current.value = "";
        } catch (err) {
            if (err.response) {

                toast.error(err.response.data.msg || "Something went wrong");
                console.error("Server error:", err.response.data);
            } else if (err.request) {
                toast.error("No response from server. Please try again.");
                console.error("No response received:", err.request);
            } else {
                toast.error("An error occurred. Please try again.");
                console.error("Error:", err.message);
            }
        }

    }





    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="w-full max-w-md bg-teal-400 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Book Table Now
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-white"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            ref={nameRef}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="date"
                            className="block text-sm font-medium text-white"
                        >
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            ref={dateRef}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="time"
                            className="block text-sm font-medium text-white"
                        >
                            Time
                        </label>
                        <input
                            type="time"
                            id="date"
                            ref={timeRef}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="contact"
                            className="block text-sm font-medium text-white"
                        >
                            Contact
                        </label>
                        <input
                            type="number"
                            id="contact"
                            ref={contactRef}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Contact"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="guests"
                            className="block text-sm font-medium text-white"
                        >
                            Guests
                        </label>
                        <input
                            type="number"
                            id="password"
                            ref={guestsRef}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Number Of Guests"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Book Table
                    </button>
                </form>

            </div>

        </div>
    );
};

export default BookTable;
