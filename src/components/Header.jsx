import React from "react";

function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Text Logo */}
          <a
            href="#"
            className="text-3xl font-bold text-cyan-400 hover:text-blue-400 transition-colors duration-300"
          >
            Techony
          </a>

          {/* Button → scroll to contact */}
          <a
            href="#contact" // 👈 anchor link to Contact section
            className="px-5 py-2 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold shadow-lg shadow-cyan-700/50 hover:scale-110 hover:shadow-cyan-700/80 transition-all duration-300"
          >
            Work with me
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
