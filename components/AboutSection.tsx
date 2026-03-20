import { Code, Layout, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-white to-gray-100"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We craft modern, scalable, and high-performance web applications
          using cutting-edge technologies like Next.js, React, and Tailwind CSS.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
          <Code className="mx-auto mb-4 text-black" size={40} />
          <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
          <p className="text-gray-600">
            We write maintainable and scalable code following best practices.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
          <Layout className="mx-auto mb-4 text-black" size={40} />
          <h3 className="text-xl font-semibold mb-2">Modern UI</h3>
          <p className="text-gray-600">
            Beautiful and responsive interfaces with great user experience.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
          <Rocket className="mx-auto mb-4 text-black" size={40} />
          <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
          <p className="text-gray-600">
            Optimized apps for speed, SEO, and best performance.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;