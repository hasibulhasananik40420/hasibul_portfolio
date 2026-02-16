"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Prevent scrolling while loading
        if (isLoading) {
            document.body.style.overflow = "hidden";
        }

        // Sequence the animations
        const timer1 = setTimeout(() => {
            setShowContent(true);
        }, 100);

        const timer2 = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "unset";
        }, 2500); // Tweak this duration as needed

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            document.body.style.overflow = "unset";
        };
    }, [isLoading]);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[999999] flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${showContent ? "opacity-100" : "opacity-0"
                } ${!isLoading ? "pointer-events-none opacity-0" : ""}`}
        >
            <div className="relative flex flex-col items-center">
                {/* Animated Name */}
                <div className="overflow-hidden">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter animate-slide-up">
                        Hasibul <span className="text-secondary">Hasan</span>
                    </h1>
                </div>

                {/* Loading Bar */}
                <div className="w-48 h-1 bg-gray-100 mt-6 rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full w-full bg-secondary origin-left animate-progress"></div>
                </div>

                {/* Text */}
                <p className="mt-4 text-gray-400 text-sm tracking-widest uppercase animate-pulse">
                    Portfolio Loading
                </p>
            </div>
        </div>
    );
};

export default Preloader;
