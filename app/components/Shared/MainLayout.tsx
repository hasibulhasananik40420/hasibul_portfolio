"use client"
import React, { useState, useEffect } from "react";
import { ChevronLeft, Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    // Initialize state based on screen size to avoid mobile users seeing a full-screen sidebar on load
    const [isSidebarOpen, setIsSidebarOpen] = useState(() => typeof window !== 'undefined' ? window.innerWidth >= 1280 : false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (typeof window !== 'undefined') {
            setIsSidebarOpen(window.innerWidth >= 1280);
        }

        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setIsSidebarOpen(true);
            } else {
                setIsSidebarOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent hydration mismatch
    if (!isMounted) return null;

    return (
        <div className="flex min-h-screen bg-main-bg">
            {/* Mobile Backdrop - Closes sidebar when clicking outside on mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-primary/20 z-40 xl:hidden backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-out border-r border-sidebar-border bg-sidebar-bg w-[280px] 2xl:w-[320px] shadow-xl xl:shadow-none ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(false)} />
            </div>

            {/* Main Content Area */}
            <div
                className={`flex-1 transition-all duration-300 ease-out w-full ${isSidebarOpen ? "xl:ml-[280px] 2xl:ml-[320px]" : "ml-0"
                    }`}
            >
                {/* Toggle Button (Visible when sidebar is closed) */}
                <div
                    className={`fixed top-6 z-40 transition-all duration-300 ${!isSidebarOpen ? "left-6 opacity-100 visible" : "left-[-100px] opacity-0 invisible"
                        }`}
                >
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="bg-white/80 backdrop-blur text-primary p-3 hover:bg-white hover:shadow-lg transition-all cursor-pointer rounded-full shadow-md border border-sidebar-border"
                    >
                        <Menu size={24} />
                    </button>
                </div>

                <main className="w-full min-h-screen">
                    <div className="max-w-7xl mx-auto px-5 md:px-6 py-12 md:py-20 lg:px-12">
                        {children}
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
