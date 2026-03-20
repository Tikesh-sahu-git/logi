"use client";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50 px-10 py-4 flex justify-between items-center shadow-md">
      <h2 className="text-xl font-bold">MySite</h2>

      <div className="space-x-6">
        <a href="#home" className="hover:text-gray-400 transition">
          Home
        </a>
        <a href="#about" className="hover:text-gray-400 transition">
          About
        </a>
        
        <a href="#contact" className="hover:text-gray-400 transition">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;