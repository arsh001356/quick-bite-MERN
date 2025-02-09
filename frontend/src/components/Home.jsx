import React from 'react'
import Menu from './Menu';


function Home() {
    return (
        <>

            {/* hero sec */}
            <div className=" w-full h-fit ">
                <img className="w-full relative" src="/images/hero-bg.jpg" alt="" />
                <div className=" flex flex-wrap w-6/12 mx-24 italic absolute top-[10rem]">
                    <div className="text-white text-4xl font-bold mb-4 ">
                        <h1>Fast Food Restaurant</h1>
                    </div>
                    <div className="text-white">
                        <p>At The Quick Bite, we take pride in our diverse menu that showcases a fusion of flavors from
                            around
                            the
                            world. Our talented chefs are dedicated to creating mouthwatering dishes that cater to all
                            tastes
                            and
                            dietary preferences. From succulent steaks and fresh seafood to vegetarian delights and decadent
                            desserts, every meal is a celebration of taste and quality.
                        </p>
                    </div>

                </div>

            </div>

            {/* <!-- offer --> */}
            <div className="w-full h-96 bg-white flex   items-center justify-center space-x-7">

                <div className="bg-slate-800 text-white w-[30rem] h-48 rounded-md flex  justify-start items-center ">
                    <div className="mx-5 ">
                        <img className="rounded-full h-[10rem] border-4 border-yellow-500 hover:h-[11rem] hover:shadow-sm hover:shadow-black"
                            src="/images/o1.jpg " alt="" />
                    </div>
                    <div>
                        <p className="text-3xl italic mb-4">Tasty Tursday</p>
                        <div>
                            <h1 className="text-4xl ">20% off</h1>
                        </div>
                        <div>
                            <a href="/booktable"
                                className="  bg-yellow-500 my-2 rounded-2xl px-2 py-1  flex justify-center items-center hover:bg-orange-600 cursor-pointer ">
                                Book
                                Table
                                <i className="fa-solid fa-cart-shopping mx-1"></i>
                            </a>
                        </div>

                    </div>

                </div>
                <div className="bg-slate-800 text-white w-[30rem] h-48 rounded-md flex  justify-start items-center ">
                    <div className="mx-5 ">
                        <img className="rounded-full h-[10rem] border-4 border-yellow-500 hover:h-[11rem] hover:shadow-sm hover:shadow-black"
                            src="/images/o2.jpg " alt="" />
                    </div>
                    <div>
                        <p className="text-3xl italic mb-4">Pizza Days</p>
                        <div>
                            <h1 className="text-4xl ">15% off</h1>
                        </div>
                        <a href="/booktable"
                            className="  bg-yellow-500 my-2 rounded-2xl px-2 py-1  flex justify-center items-center hover:bg-orange-600 cursor-pointer ">
                            Book
                            Table
                            <i className="fa-solid fa-cart-shopping mx-1"></i>
                        </a>
                    </div>


                </div>

            </div>
            {/* <!-- our menu --> */}
            <Menu />
        </>
    )
}

export default Home