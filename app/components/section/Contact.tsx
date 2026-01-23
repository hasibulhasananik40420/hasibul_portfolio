"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="w-full lg:mt-28 md:mt-20 mt-14">
            <div className="container mx-auto">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12 space-y-4">
                        {/* <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">Connect</span> */}
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold tracking-[0.2em] uppercase rounded-full">
                        Connect
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                        Let's Start a <span className="italic text-secondary">Conversation.</span>
                    </h2>
                    <p className="text-secondary/70 font-light max-w-2xl mx-auto leading-relaxed pt-4">
                        Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and creative ideas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-serif font-bold text-primary">Contact Information</h3>
                            <p className="text-secondary/70 font-light">Reach out via any of these channels. I'll get back to you as soon as possible.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 flex items-center justify-center bg-white border border-secondary/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 rounded-sm">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-secondary/50 font-bold">Email</span>
                                    <a href="mailto:hello@codevia.com" className="text-primary font-medium hover:text-accent transition-colors">hello@codevia.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 flex items-center justify-center bg-white border border-secondary/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 rounded-sm">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-secondary/50 font-bold">Phone</span>
                                    <a href="tel:+880123456789" className="text-primary font-medium hover:text-accent transition-colors">+880 123 456 789</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 flex items-center justify-center bg-white border border-secondary/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 rounded-sm">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-secondary/50 font-bold">Location</span>
                                    <span className="text-primary font-medium transition-colors">Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 border border-secondary/5 rounded-sm">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-secondary/50 font-bold">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-transparent border-b border-secondary/20 py-2 focus:border-accent outline-none transition-colors text-primary"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-secondary/50 font-bold">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-transparent border-b border-secondary/20 py-2 focus:border-accent outline-none transition-colors text-primary"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-secondary/50 font-bold">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-transparent border-b border-secondary/20 py-2 focus:border-accent outline-none transition-colors text-primary resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>
                            <button className="flex items-center gap-3 bg-primary text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all duration-300 shadow-xl hover:shadow-2xl rounded-sm cursor-pointer">
                                <span>Send Message</span>
                                <Send size={16} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;