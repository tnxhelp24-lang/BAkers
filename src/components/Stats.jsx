const Stats = () => (
    <section className="bg-[url('https://demoxml.com/html/royalbakery/images/counter-bg.jpg')] bg-cover bg-fixed relative py-24 text-white">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
                { val: "1443", label: "Happy Clients", icon: "☺" },
                { val: "529", label: "Coffee Cups", icon: "☕" },
                { val: "721", label: "Worked Hours", icon: "⌛" },
                { val: "105", label: "Branches", icon: "🏠" },
            ].map((stat) => (
                <div key={stat.label} className="space-y-4 group">
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-6xl font-bold">{stat.val}</span>
                        <span className="text-3xl text-[#60d0f4]">{stat.icon}</span>
                    </div>
                    <div className="h-px bg-[#f68284] w-12 mx-auto"></div>
                    <p className="uppercase text-xs font-bold tracking-[0.3em] text-[#f68284]">{stat.label}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Stats;