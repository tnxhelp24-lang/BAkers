const Newsletter = () => {
    return (
        <section className="relative z-20 -mb-16">
            <div className="max-w-6xl mx-auto bg-[#f2b35d] py-10 px-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg">

                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                    SUBSCRIBE TO OUR NEWSLETTER
                </h3>

                <div className="flex w-full lg:w-auto gap-4">
                    <div className="relative flex-1">
                        <input
                            type="email"
                            placeholder="Your Email Here"
                            className="w-full px-5 py-3 bg-white outline-none text-gray-600"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            ✉
                        </span>
                    </div>

                    <button className="bg-black text-white px-8 py-3 font-semibold tracking-wider hover:bg-gray-800 transition">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
