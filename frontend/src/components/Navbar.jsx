import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../context/AuthProvider';
import Logout from './Logout';


function Navbar() {
    const { authUser, setAuthUser } = useContext(AuthContext)


    useEffect(() => {
        const navItems = document.querySelectorAll("#nav-as li");
        navItems.forEach(item => {
            item.addEventListener("click", () => {
                navItems.forEach(nav => nav.classList.remove("text-orange-400"));
                item.classList.add("text-orange-400");
            });
        });

    });

    return (
        <>
            <nav className="w-full bg-gray-800 h-20 text-white flex items-center justify-between  ">
                <div className="px-16 ">
                    <h1 className="font-bold text-2xl cursor-pointer italic">Quick Bite</h1>
                </div>
                <div className="relative font-semibold text-lg ">
                    <ul className="flex space-x-7 " id='nav-as' >
                        <li className=" cursor-pointer  "><Link to="/">HOME</Link></li>
                        <li className=" cursor-pointer "><Link to="/menu">MENU</Link></li>
                        <li className=" cursor-pointer "><Link to="/about">ABOUT</Link></li>
                        <li className=" cursor-pointer "><Link to="/booktable">BOOK TABLE</Link></li>

                    </ul>

                </div>
                {
                    authUser ? (<Logout />) :
                        (<div
                            className="p-4 mx-10 font-semibold bg-orange-400 rounded-2xl w-28 h-8 flex justify-center items-center hover:bg-orange-600 cursor-pointer">
                            <Link to="/signup"> SIGN UP</Link>
                        </div>)
                }

            </nav>
        </>
    )
}

export default Navbar