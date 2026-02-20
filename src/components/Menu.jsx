const Menu = () => (
    <section id="Features" className="py-20 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-4xl font-serif italic text-[#f68284] lowercase">Our Menu</h3>
            <h2 className="text-2xl font-bold uppercase tracking-widest mt-2">Creamy Dishes</h2>
            <div className="flex justify-center my-6">
                <div className="h-px bg-gray-200 w-24 relative after:content-['△'] after:absolute after:-top-3 after:left-1/2 after:-translate-x-1/2 after:bg-[#f9f9f9] after:px-2 after:text-[10px] after:text-gray-300"></div>
            </div>
            <p className="max-w-2xl mx-auto text-gray-500 italic mb-16">The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day.</p>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                {[{ name: "Chocolate Flash", price: "20.00", img: "1" },
                { name: "Rose Creamy", price: "25.00", img: "2" },
                { name: "Velvet Cake", price: "25.00", img: "3" },
                { name: "Flowered Cake", price: "25.00", img: "4" },
                { name: "Roseberry Cake", price: "25.00", img: "5" },
                { name: "Chocolate Berry Cake", price: "25.00", img: "6" },
                ].map((item) => (
                    <div key={item.name} className="flex items-center bg-white p-8 border-l-4 border-[#60d0f4] shadow-sm">
                        <img src={`https://demoxml.com/html/royalbakery/images/menu-${item.img}.png`} className="w-40 h-40 object-contain mr-8" alt={item.name} />
                        <div className="text-left flex-1">
                            <div className="flex justify-between items-baseline mb-2">
                                <h4 className="font-bold uppercase tracking-widest text-sm">{item.name}</h4>
                                <span className="text-[#f68284] font-bold text-lg">${item.price}</span>
                            </div>
                            <p className="text-gray-400 text-sm italic mb-6">The day he wane day he was shooting at some food and up through the ground.</p>
                            <button className="border-2 border-gray-200 px-8 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#f68284] hover:text-white hover:border-[#f68284] transition-all">Order Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Menu;