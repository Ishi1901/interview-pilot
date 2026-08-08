import { useState } from "react";
import { Menu, X, Send } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0B1020]/70 border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Send className="text-violet-500 w-6 h-6 rotate-[-20deg]" />
          <h1 className="text-xl font-bold">
            Interview
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Pilot
            </span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300">
          <li className="hover:text-violet-400 transition duration-300 cursor-pointer">
            Home
          </li>

          <li className="hover:text-violet-400 transition duration-300 cursor-pointer">
            About
          </li>

          <li className="hover:text-violet-400 transition duration-300 cursor-pointer">
            Features
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:scale-105 duration-300 shadow-lg shadow-violet-700/30">
          Start Interview
        </button>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-[#111827] px-6 py-5 space-y-4 border-t border-violet-800/20">

          <div className="hover:text-violet-400 cursor-pointer">Home</div>

          <div className="hover:text-violet-400 cursor-pointer">About</div>

          <div className="hover:text-violet-400 cursor-pointer">
            Features
          </div>

          <button className="w-full mt-3 rounded-full py-3 bg-gradient-to-r from-violet-600 to-purple-500">
            Start Interview
          </button>

        </div>
      )}
    </nav>
  );
}