"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get in Touch
          </h1>
          <p className="text-gray-600">
            Have a project or idea? Let’s connect and build something amazing 🚀
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-4">
              <Mail />
              <span className="text-gray-700">example@email.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone />
              <span className="text-gray-700">+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin />
              <span className="text-gray-700">India</span>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-5">
          
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input suppressHydrationWarning
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              placeholder="Write your message..."
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactSection;