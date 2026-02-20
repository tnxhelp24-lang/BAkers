const Categories = () => {
    const cats = [
        { name: "Partycakes", img: "1" },
        { name: "Softcakes", img: "2" },
        { name: "Cupcakes", img: "3" },
        { name: "Berrycakes", img: "4" },
        { name: "Nutcake", img: "5" },
    ];

    return (
        <section className="relative z-20">
            {/* Orange Background */}
            <div className="bg-[#f4b25e] pt-20 pb-12">
                <div className="max-w-6xl mx-auto flex justify-center gap-16 text-center">
                    {cats.map((item) => (
                        <div
                            key={item.name}
                            className="flex flex-col items-center group cursor-pointer -mt-32"
                        >
                            {/* Circle */}
                            <div className="w-[100px] h-[100px] bg-[#3b3b3b] border-[6px] border-white rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#f68284]">
                                <img
                                    src={`https://demoxml.com/html/royalbakery/images/festival-ic-${item.img}.png`}
                                    alt={item.name}
                                    className="w-10"
                                />
                            </div>

                            {/* Text */}
                            <span className="text-white font-bold uppercase tracking-[0.25em] text-[13px]">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
