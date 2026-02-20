import React, { useEffect, useState } from "react";

const slides = [
    { image: "https://demoxml.com/html/royalbakery/images/slider-1.jpg" },
    { image: "https://demoxml.com/html/royalbakery/images/slider-2.jpg" },
    { image: "https://demoxml.com/html/royalbakery/images/slider-3.jpg" },
];

const HeroSlider = () => {
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
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[100vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="bg-black/60 h-full flex items-center justify-center text-center text-white px-4">
                        <div>
                            <img
                                src="https://demoxml.com/html/royalbakery/images/slider-ic.png"
                                alt=""
                                className="mx-auto mb-4"
                            />

                            <p className="uppercase tracking-widest text-xl md:text-2xl">
                                Cake For Later Cake
                            </p>

                            <h1 className="md:text-6xl my-4 font-extrabold leading-tight">
                                AS A WAY OF LIFE
                            </h1>

                            <button className="mt-6 bg-orange-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* LEFT ARROW */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center transition"
            >
                ❮
            </button>

            {/* RIGHT ARROW */}
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center transition"
            >
                ❯
            </button>
        </section>
    );
};

export default HeroSlider;
