import React from "react";

const CakeFestival = () => {
    return (
        <section
            className="
        relative py-20
        bg-[url('https://demoxml.com/html/royalbakery/images/festival-bg.jpg')]
        bg-cover bg-center
      "
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 "></div>

            {/* Content */}
            <div className="relative max-w-2xl mx-auto">
                <div className="bg-white p-14 text-center shadow-2xl border-2 border-orange-400">

                    {/* Title */}
                    <h3 className="uppercase text-sm font-bold tracking-widest text-gray-800">
                        Cake Festival
                    </h3>

                    {/* Small underline */}
                    <div className="w-10 h-[2px] bg-orange-400 mx-auto mt-3 mb-6"></div>

                    {/* Paragraph */}
                    <p className="text-gray-600 leading-7 mb-8">
                        The day for a three hour tour a three hour tour then one day he was
                        shooting at some food and up through the ground came a oil that is
                        its a beautiful day got a dream true.
                    </p>

                    {/* Button */}
                    <button className="bg-[#f08080] text-white px-10 py-3 text-xs font-semibold tracking-wider uppercase hover:bg-[#e76f6f] transition duration-300">
                        Read More
                    </button>

                </div>
            </div>
        </section>
    );
};

export default CakeFestival;
