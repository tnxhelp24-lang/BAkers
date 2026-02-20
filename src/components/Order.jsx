import React from "react";

const Order = () => {
    return (
        <section id="Order" className="relative bg-[#ffffff] py-24 overflow-hidden">
            {/* Right Image */}
            <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
                <img
                    src="https://demoxml.com/html/royalbakery/images/order-online.png"
                    alt="cake"
                    className="h-full w-full object-contain object-right"
                />
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="w-full lg:w-1/2">
                    {/* Heading */}
                    <div className="text-center lg:text-left mb-10">
                        <h3 className="text-[#f195b2] text-4xl italic font-serif">
                            Choose your Flavour
                        </h3>

                        <h2 className="uppercase tracking-[3px] font-bold text-gray-800 mt-3">
                            ORDER ONLINE
                        </h2>

                        {/* Divider */}
                        <div className="flex items-center mt-4">
                            <div className="h-[1px] bg-pink-300 w-16"></div>
                            <div className="mx-2 text-pink-400 text-sm">△</div>
                            <div className="h-[1px] bg-pink-300 w-16"></div>
                        </div>

                        <p className="text-gray-500 mt-6 text-sm leading-relaxed max-w-md">
                            The day for a three hour tour a three hour tour then one day he
                            was shooting at some food and up through the ground came a oil
                            that is its a beautiful day.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="NAME *"
                            className="border border-gray-300 bg-transparent px-4 py-3 text-sm outline-none focus:border-pink-400"
                        />

                        <input
                            type="text"
                            placeholder="PHONE NUMBER *"
                            className="border border-gray-300 bg-transparent px-4 py-3 text-sm outline-none focus:border-pink-400"
                        />

                        <select className="border border-gray-300 bg-transparent px-4 py-3 text-sm outline-none focus:border-pink-400">
                            <option>FLAVOURS</option>
                            <option>Chocolate</option>
                            <option>Vanilla</option>
                            <option>Strawberry</option>
                        </select>

                        <input
                            type="text"
                            placeholder="YOUR ADDRESS *"
                            className="border border-gray-300 bg-transparent px-4 py-3 text-sm outline-none focus:border-pink-400"
                        />
                    </form>

                    {/* Button */}
                    <div className="mt-8">
                        <button className="bg-[#f195b2] text-white px-10 py-3 text-sm font-semibold tracking-wider hover:bg-pink-500 transition">
                            ORDER NOW
                        </button>
                    </div>

                    {/* Bottom Text */}
                    <p className="mt-8 text-sm text-gray-500">
                        FOR MORE QUERIES CALL US AT :{" "}
                        <span className="text-sky-500 font-semibold">
                            1-800-23-456-7890
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Order;
