import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const BookedTablePage = () => {
    const { id } = useParams();
    const [bookingDetails, setBookingDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookingDetails = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/booking/${id}`);
                setBookingDetails(response.data);
            } catch (err) {

                toast.error("Unable to fetch booking details. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchBookingDetails();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Loading...</h2>
                </div>
            </div>
        );
    }

    if (!bookingDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-red-600 text-center">Error</h2>
                    <p className="text-gray-700 text-center">Unable to fetch booking details. Please try again later.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-orange-500 text-center">Table Booked Successfully!</h2>
                <div className="space-y-2 text-gray-700">
                    <p><strong>Name:</strong> {bookingDetails.name}</p>
                    <p><strong>Contact:</strong> {bookingDetails.contact}</p>
                    <p><strong>Date:</strong> {bookingDetails.date}</p>
                    <p><strong>Time:</strong> {bookingDetails.time}</p>
                    <p><strong>Guests:</strong> {bookingDetails.guests}</p>
                </div>
            </div>
        </div>
    );
};

export default BookedTablePage;
