import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
        
        {/* Left side - Name or Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">Techony</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right side - Socials */}
        <div className="flex gap-6 text-xl">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            <FaLinkedinIn />
          </a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            <FaXTwitter /> {/* 👈 New X icon */}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
