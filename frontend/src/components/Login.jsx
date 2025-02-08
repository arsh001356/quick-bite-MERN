import React, { useContext, useRef } from "react";
import axios from "axios"
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate()
    //const{authUser,setAuthUser}=useContext(AuthContext)


    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, formData)
            .then((res) => {
                // console.log(res.data)
                if (res.data) {
                    toast.success("Login Successfully")
                }
                localStorage.setItem("User", JSON.stringify(res.data.user))
                // console.log(res.data.user)
                navigate("/")
                window.location.reload()

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
                    Log In
                </h2>
                <form onSubmit={handleLogin} className="space-y-4">
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
                        Log In
                    </button>
                </form>
                <p className="text-sm text-white text-center mt-4">
                    Don't have an account?{" "}
                    <a
                        href="/signup"
                        className="text-gray-800 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
