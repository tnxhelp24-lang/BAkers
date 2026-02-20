const About = () => {
    return (
        <section id="About" className="bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
                <div className="relative">
                    <img src="https://demoxml.com/html/royalbakery/images/welcome.png" alt="Chef" className="w-full" />
                </div>
                <div className="space-y-6">
                    <div className="flex items-baseline gap-2">
                        <h2 className="text-6xl font-bold text-[#f68284]">30</h2>
                        <span className="text-3xl font-bold text-gray-800 uppercase">Years of Excellence</span>
                    </div>
                    <div>
                        <h3 className="text-4xl font-serif italic text-[#f68284] mb-2">About Us</h3>
                        <h4 className="text-xl font-bold uppercase tracking-widest bg-blue-100 inline-block px-2">Our Story</h4>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-lg italic">
                        The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day Got a dream and we just know now we are gonna make our dream come true so get a witch is shawl on a broomstick you can crawl on were gonna pay.
                    </p>
                    <button className="bg-[#f68284] text-white px-10 py-4 font-bold uppercase text-sm shadow-lg">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
