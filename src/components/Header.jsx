import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById("hero")?.offsetHeight || 600;

            if (window.scrollY > heroHeight - 80) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${isFixed ? "fixed" : "absolute"} top-0 left-0 w-full z-50 bg-black/50 border-b border-white/10 `}>
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5 text-white">
                <div className="flex items-center gap-4">
                    <span className="text-2xl font-semibold tracking-tighter">Royal</span>
                    <img src="https://demoxml.com/html/royalbakery/images/logo.png" alt="Logo" className="h-10" />
                    <span className="text-2xl font-semibold tracking-tighter">Bakers</span>
                </div>
                <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-bold uppercase tracking-widest">
                    <Link to="/" className="text-[#f68284] border-l-2 border-[#f68284] pl-3">Home</Link>
                    {["Pages", "Features", "Portfolio", "Blog", "Contact"].map((item) => (
                        <Link key={item} to="/" onClick={() => scrollToSection(item)} className="hover:text-[#f68284] transition-colors">{item}</Link>
                    ))}
                    <button onClick={() => scrollToSection("Order")} className="bg-[#f68284] px-7 py-3 text-xs font-bold hover:bg-white hover:text-black transition-all">
                        ORDER ONLINE
                    </button>
                </nav>
            </div>
        </header>
    )
};

export default Header;
