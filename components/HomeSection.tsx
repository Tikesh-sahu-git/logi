import { ArrowRight } from "lucide-react";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-gray-100 to-white pt-24"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Build Modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">
              Web Experiences
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-6 max-w-lg">
            Create fast, scalable, and beautiful web applications using
            Next.js, React, and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#about"
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Get Started <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-black hover:bg-black hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Content (Image / Illustration) */}
        <div className="flex justify-center">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-black to-gray-400 rounded-full blur-3xl opacity-30 absolute"></div>
          
          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            alt="hero"
            className="relative z-10 w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default HomeSection;