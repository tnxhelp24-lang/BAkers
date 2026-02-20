import React, { useEffect, useState } from "react";

const slides = [
    {
        image: "https://demoxml.com/html/royalbakery/images/team.png",
        name: "Stephen Richards",
        role: "CHEFS",
        desc: "The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day."
    },
    {
        image: "https://demoxml.com/html/royalbakery/images/team.png",
        name: "John Carter",
        role: "MASTER CHEF",
        desc: "Got a dream and we just know now we are gonna make our dream come true so get a witch is shawl on a broomstick you can crawl on."
    }
];

const Team = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="relative h-[750px] overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage:
                    "url(https://demoxml.com/html/royalbakery/images/team-bg.jpg)"
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/75"></div>

            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-6 w-full">
                        <div className="grid md:grid-cols-2 items-center gap-16 text-white">

                            {/* Left Image */}
                            <div className="flex justify-center">
                                <img
                                    src={slide.image}
                                    alt={slide.name}
                                    className="max-h-[550px] object-contain"
                                />
                            </div>

                            {/* Right Content */}
                            <div>
                                <h2 className="text-4xl text-pink-400 italic mb-3">
                                    Meet Our Team
                                </h2>

                                <h3 className="uppercase tracking-widest font-semibold">
                                    {slide.role}
                                </h3>

                                <div className="w-12 h-[2px] bg-pink-400 my-5"></div>

                                <p className="text-gray-300 leading-7 mb-6">
                                    {slide.desc}
                                </p>

                                <h4 className="uppercase font-bold tracking-wider">
                                    {slide.name}
                                </h4>

                                <div className="mt-6 text-sm text-gray-400">
                                    <p>info@domain.com</p>
                                    <p>Phone: 1-800-23-456-7890</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}

            {/* LEFT ARROW */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-pink-400 text-white w-12 h-12 rounded-full flex items-center justify-center transition"
            >
                ❮
            </button>

            {/* RIGHT ARROW */}
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-pink-400 text-white w-12 h-12 rounded-full flex items-center justify-center transition"
            >
                ❯
            </button>
        </section>
    );
};

export default Team;
