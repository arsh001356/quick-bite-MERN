import React from 'react'

function About() {
    return (
        <div className="bg-slate-800 flex flex-col min-h-[80vh] ">
            {/* <!-- hero about --> */}

            <div className="w-full h-auto mt-36 flex justify-evenly items-center space-x-9 mb-10 ">
                <div>
                    <img className="h-[37rem] w-full" src="/images/about-img.png" alt="" />
                </div>
                <div className="flex flex-wrap w-[35rem] text-white flex-col justify-around">
                    <h1 className="italic font-bold text-4xl my-4">We Are Quick Bite
                    </h1>
                    <p className="font-sans">"Quick Bite" offering seamless table booking and comprehensive menu browsing. Our
                        platform allows you to
                        easily
                        reserve a table at your favorite local restaurants and explore their menus to find exactly what
                        you're
                        craving. With Quick Bite, you can plan your dining outings effortlessly, ensuring you have a spot
                        reserved and know what's on offer before you arrive. We aim to make dining out more convenient and
                        enjoyable for everyone.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default About