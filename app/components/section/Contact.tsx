"use client";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mldrnjrz");

    if (state.succeeded) {
        return (
            <section id="contact" className="mt-24 mb-20 portfolio-container">
                <div className="flex flex-col items-center justify-center py-20 bg-[#FAFBFD] rounded-3xl border border-gray-100 text-center animate-reveal">
                    <div className="w-20 h-20 bg-teal-500/10 text-teal-500 rounded-full flex items-center justify-center mb-6">
                        <FaCheckCircle size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-4">Message Sent Successfully!</h2>
                    <p className="text-gray-500 text-lg max-w-md mx-auto mb-8">
                        Thank you for reaching out! I have received your message and will get back to you as soon as possible.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary transition-all"
                    >
                        Send Another Message
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="mt-16 portfolio-container">
            {/* Section Header */}
            <div className="relative mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-primary inline-block">
                    Get In Touch
                </h2>
                {/* Accent Underline */}
                <div className="absolute -bottom-2 left-0 w-24 h-1 md:h-1.5 bg-secondary rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Left Side: Contact Info */}
                <div className="w-full lg:w-[40%] space-y-8">
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Have a project in mind or just want to chat? Feel free to reach out.
                        I'm always open to discussing new opportunities and creative ideas.
                    </p>

                    <div className="space-y-6">
                        {/* Email */}
                        <div className="flex items-center gap-5 p-4 rounded-xl bg-[#FAFBFD] border border-gray-50 transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</h4>
                                <a href="mailto:hasibulhasan40420@gmail.com" className="text-primary font-semibold hover:text-secondary transition-colors">
                                    hasibulhasana40420@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-5 p-4 rounded-xl bg-[#FAFBFD] border border-gray-50 transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500">
                                <FaPhoneAlt size={18} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Phone</h4>
                                <a href="tel:+8801790170749" className="text-primary font-semibold hover:text-secondary transition-colors">
                                    +880 1790 170 749
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-5 p-4 rounded-xl bg-[#FAFBFD] border border-gray-50 transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Location</h4>
                                <p className="text-primary font-semibold">
                                    Rajshahi, Bangladesh
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="w-full lg:w-[60%]">
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-2 md:p-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="full-name" className="text-sm font-bold text-primary/70 ml-1">Full Name</label>
                                <input
                                    id="full-name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full px-5 py-4 rounded-xl bg-[#FAFBFD] border border-gray-100 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                                />
                                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-primary/70 ml-1">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-5 py-4 rounded-xl bg-[#FAFBFD] border border-gray-100 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-bold text-primary/70 ml-1">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="What is this about?"
                                required
                                className="w-full px-5 py-4 rounded-xl bg-[#FAFBFD] border border-gray-100 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                            />
                            <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs mt-1" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-primary/70 ml-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="How can I help you?"
                                required
                                className="w-full px-5 py-4 rounded-xl bg-[#FAFBFD] border border-gray-100 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
                            ></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="flex items-center justify-center gap-3 bg-primary text-white px-6 py-3 rounded-md font-bold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-secondary/30 active:scale-95 group w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            {state.submitting ? "Sending..." : "Send Message"}
                            {!state.submitting && <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;