import React from "react";

const posts = [
    {
        id: 1,
        image:
            "https://demoxml.com/html/royalbakery/images/latestblog-1.jpg",
        day: "25",
        month: "JAN",
        title: "CREAMY WAVES SHIFT",
    },
    {
        id: 2,
        image:
            "https://demoxml.com/html/royalbakery/images/latestblog-2.jpg",
        day: "07",
        month: "FEB",
        title: "THE MUPPET SHOW",
    },
    {
        id: 3,
        image:
            "https://demoxml.com/html/royalbakery/images/latestblog-3.jpg",
        day: "14",
        month: "APR",
        title: "DESERVE THE CUPCAKE",
    },
];

const Blog = () => {
    return (
        <section id="Blog" className="scroll-mt-24 bg-[#f5f5f5] py-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h3 className="text-[#f195b2] text-4xl italic font-serif">
                        Latest Post
                    </h3>

                    <h2 className="uppercase tracking-[3px] font-bold mt-3">
                        OUR BLOG
                    </h2>

                    {/* Divider */}
                    <div className="flex justify-center items-center mt-4">
                        <div className="h-[1px] w-16 bg-pink-300"></div>
                        <div className="mx-2 text-pink-400 text-sm">△</div>
                        <div className="h-[1px] w-16 bg-pink-300"></div>
                    </div>

                    <p className="text-gray-500 text-sm max-w-2xl mx-auto mt-6">
                        The day for a three hour tour a three hour tour then one day he was
                        shooting at some food and up through the ground came a oil that is
                        its a beautiful day.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white shadow-sm">

                            {/* Image */}
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-56 object-cover"
                            />

                            {/* Content */}
                            <div className="p-6 relative">

                                {/* Date Box */}
                                <div className="absolute -top-8 left-6 bg-sky-500 text-white text-center px-4 py-3">
                                    <p className="text-xl font-bold leading-none">
                                        {post.day}
                                    </p>
                                    <p className="text-xs tracking-wider">
                                        {post.month}
                                    </p>
                                </div>

                                <h3 className="font-semibold mt-6">
                                    {post.title}
                                </h3>

                                <p className="text-gray-500 text-sm mt-4">
                                    The day he was shooting at some food and up through the
                                    ground came a oil that is its a beautiful day came a oil.
                                </p>

                                <button className="mt-4 text-pink-500 text-sm font-semibold hover:underline">
                                    READ MORE →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Button */}
                <div className="text-center mt-14">
                    <button className="bg-[#f195b2] text-white px-8 py-3 text-sm tracking-wider hover:bg-pink-500 transition">
                        VIEW ALL POST
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;
