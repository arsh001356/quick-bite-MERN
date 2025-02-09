import React, { useRef } from "react";
import axios from "axios"
import toast from 'react-hot-toast';

import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        // console.log("Form submitted:", formData);
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, formData)
            .then((res) => {
                // console.log(res.data)
                if (res.data) {
                    toast.success("SignUp Successfully")
                }
                // localStorage.setItem("User", JSON.stringify(res.data.user))
                // console.log(res.data.user)
                navigate("/login")
            })
            .catch((err) => {
                if (err) {
                    console.log(err)
                    toast.error("ERROR: " + err.response.data.msg)
                }
            })
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800">
            <div className="w-full max-w-md bg-orange-500 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Sign Up
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
                            htmlFor="email"
                            className="block text-sm font-medium text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            ref={passwordRef}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="text-sm text-white text-center mt-4">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-gray-800 hover:underline"
                    >
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
