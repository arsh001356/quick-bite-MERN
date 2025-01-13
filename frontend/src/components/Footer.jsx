import React from 'react'

function Footer() {
    return (
        <>
            {/* <!-- footer --> */}
            <div className=" h-auto bg-slate-900 text-white py-10 w-full">
                <div className="w-full h-auto flex justify-evenly items-center my-16  ">
                    <div className="flex flex-col items-center justify-center  ">
                        <h1 className="text-3xl font-bold italic my-3  hover:text-yellow-500">Contact Us</h1>
                        <p className=" hover:text-yellow-500">India</p>
                        <p className="m-2 hover:text-yellow-500">Call +01 1234567890</p>
                        <p className=" hover:text-yellow-500">quickbite@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-wrap w-96 text-center  ">
                        <h1 className="text-3xl font-bold italic mt-4  hover:text-yellow-500">Quick Bite</h1>
                        <p className="m-2  hover:text-yellow-500">Necessary, making this the first true generator on the
                            Internet. It uses a dictionary
                            of over 200
                            Latin words, combined with</p>
                        <p>
                            <i className="fa-brands fa-facebook fa-xl hover:cursor-pointer hover:text-yellow-500"></i>
                            <i className="fa-brands fa-twitter mx-3 fa-xl hover:text-yellow-500 hover:cursor-pointer"></i>
                            <i className="fa-brands fa-instagram fa-xl hover:text-yellow-500 hover:cursor-pointer"></i>
                        </p>

                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <h1 className="text-3xl font-bold italic my-3  hover:text-yellow-500">Opening Hours</h1>
                        <p className="m-2  hover:text-yellow-500">Everyday

                        </p>
                        <p className=" hover:text-yellow-500">10.00 Am -10.00 Pm</p>

                    </div>

                </div>
                <div className="flex flex-col justify-center items-center">
                    <p>© 2024 All Rights By QUICK BITE</p>

                    <p className="m-2">© By QUICK BITE</p>
                </div>
            </div>
        </>
    )
}

export default Footer