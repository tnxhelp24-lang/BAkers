import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#0c0c0c] text-gray-400 pt-32">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-16 pb-20">

                {/* Column 1 */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-white text-xl font-bold">Royal</span>
                        <img src="https://demoxml.com/html/royalbakery/images/logo.png" className="h-8" alt="" />
                        <span className="text-white text-xl font-bold">Bakers</span>
                        {/* <img
                            src="https://demoxml.com/html/royalbakery/images/logo.png"
                            alt="logo"
                            className="h-10"
                        /> */}
                    </div>

                    <p className="italic leading-7 text-sm mb-8 max-w-sm">
                        The day for a three hour tour a three hour tour then one day he was
                        shooting at some food and up through the ground oil.
                    </p>

                    <button className="border border-white text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-[#f68284] hover:border-[#f68284] transition">
                        Contact
                    </button>
                </div>

                {/* Column 2 */}
                <div className="text-center">
                    <h3 className="text-white uppercase tracking-[0.3em] text-xs mb-8">
                        Order Online
                    </h3>

                    <p className="italic leading-7 text-sm mb-8 max-w-sm mx-auto">
                        The day for a three hour tour a three hour tour then one day he was
                        shooting at some food and up through the ground oil.
                    </p>

                    <button className="bg-[#60d0f4] text-black px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition">
                        Order Now
                    </button>
                </div>

                {/* Column 3 */}
                <div className="md:text-right">
                    <h3 className="text-white uppercase tracking-[0.3em] text-xs mb-8">
                        Contact Us Today
                    </h3>

                    <div className="space-y-3 text-sm italic leading-6">
                        <p>Call Us 666 777 888 OR 111 222 333</p>
                        <p>Send an Email on contact@cakeshop.com</p>
                        <p>
                            Visit Us 123 Fake Street - London 12358 United Kingdom
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-end gap-4 mt-10">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f68284] transition cursor-pointer"
                            >
                                <span className="text-xs text-white">•</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black border-t border-white/10 py-6">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.25em]">

                    <p>
                        © Copyrights 2016 Royal Bakers. All Rights Reserved
                    </p>

                    <div className="flex gap-4 items-center">
                        <Link to="#" className="hover:text-[#f68284]">Home</Link>
                        <span>/</span>
                        <Link to="#" className="hover:text-[#f68284]">About</Link>
                        <span>/</span>
                        <Link to="#" className="hover:text-[#f68284]">Services</Link>
                        <span>/</span>
                        <Link to="#" className="hover:text-[#f68284]">Portfolio</Link>
                        <span>/</span>
                        <Link to="#" className="hover:text-[#f68284]">Blog</Link>
                        <span>/</span>
                        <Link to="#" className="hover:text-[#f68284]">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
