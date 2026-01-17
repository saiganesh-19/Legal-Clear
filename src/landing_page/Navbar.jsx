import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10 mb-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 text-white">
        <img src="/Logo.png" alt="" />

        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-[#F4A261]">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#F4A261]">
            Scan Document
          </Link>
          <Link to="/scan_document" className="hover:text-[#F4A261]">
            Upload
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;