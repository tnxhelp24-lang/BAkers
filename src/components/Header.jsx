
const Header = () => (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 border-b border-white/10 ">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5 text-white">
            <div className="flex items-center gap-4">
                <span className="text-2xl font-semibold tracking-tighter">Royal</span>
                <img src="https://demoxml.com/html/royalbakery/images/logo.png" alt="Logo" className="h-10" />
                <span className="text-2xl font-semibold tracking-tighter">Bakers</span>
            </div>
            <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-bold uppercase tracking-widest">
                <a href="#" className="text-[#f68284] border-l-2 border-[#f68284] pl-3">Home</a>
                {["Pages", "Features", "Portfolio", "Blog", "Contact"].map((item) => (
                    <a key={item} href="#" className="hover:text-[#f68284] transition-colors">{item}</a>
                ))}
                <button className="bg-[#f68284] px-7 py-3 text-xs font-bold hover:bg-white hover:text-black transition-all">
                    ORDER ONLINE
                </button>
            </nav>
        </div>
    </header>
);

export default Header;
