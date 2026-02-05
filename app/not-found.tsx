import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center portfolio-container overflow-hidden mt-20">
            <div className="relative w-full max-w-2xl text-center z-10 animate-reveal">
                {/* Decorative background element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

                {/* Large 404 Number */}
                <div className="relative inline-block mb-8">
                    <h1 className="text-[120px] md:text-[200px] font-black text-primary/10 tracking-tighter leading-none select-none">
                        404
                    </h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4">
                            Page Not Found
                        </h2>
                    </div>
                </div>

                {/* Message */}
                <p className="text-primary/60 text-lg md:text-xl max-w-md mx-auto mb-10 leading-relaxed font-normal">
                    Oops! The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                {/* Home Button */}
                <div className="flex justify-center">
                    <Link
                        href="/"
                        className="group flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary transition-all duration-500 shadow-xl hover:shadow-secondary/20 active:scale-95"
                    >
                        <HiOutlineArrowNarrowLeft className="text-xl group-hover:-translate-x-2 transition-transform duration-500 ease-out" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
