"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Mock Data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development in 2026",
        category: "Insights",
        date: "Jan 12, 2026",
        image: "/images/news-01.jpg"
    },
    {
        id: 2,
        title: "Mastering Next.js Server Components",
        category: "Technical",
        date: "Jan 05, 2026",
        image: "/images/news-02.jpg"
    },
    {
        id: 3,
        title: "Designing for Accessibility: A Guide",
        category: "Design",
        date: "Dec 28, 2025",
        image: "/images/news-03.jpg"
    }
];

const Blog = () => {
    return (
        <section id="blog" className="w-full lg:mt-28 md:mt-20 mt-14">
            <div className="container mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-px bg-accent"></span>
                            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">Latest Writing</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                            Thoughts & <span className="italic text-secondary">Insights.</span>
                        </h2>
                    </div>
                    <button className="text-primary text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-all duration-300">
                        View All Posts
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative w-full aspect-16/10 overflow-hidden bg-secondary/5 mb-6 rounded-sm">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <span className="text-secondary/50 text-xs font-medium uppercase tracking-widest">
                                    {post.date}
                                </span>
                                <h3 className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-snug">
                                    {post.title}
                                </h3>
                                <div className="flex items-center gap-2 pt-2 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>Read More</span>
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Blog;