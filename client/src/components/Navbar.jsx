import { useState } from "react";
import { Menu, X, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // const goTo = (path) => {
  //   setIsOpen(false);
  //   navigate(path);
  // };

  // const scrollTo = (section) => {
  //   setIsOpen(false);

  //   document.getElementById(section)?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  return (
    <nav className="border-b border-white/10 bg-[#0B0B2F]/80 backdrop-blur-lg">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
<button
  onClick={() => navigate("/")}
  className="flex items-center gap-2 cursor-pointer"
>
  <Send className="text-violet-500 w-6 h-6 rotate-[-20deg]" />

  <h1 className="text-xl font-bold">
    Interview
    <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
      Pilot
    </span>
  </h1>
</button>


        {/* Desktop Navigation
        <ul className="hidden md:flex items-center gap-10 text-gray-300">

<li
  onClick={() => navigate("/")}
  className="hover:text-violet-400 transition duration-300 cursor-pointer"
>
  Home
</li>

          <li
            onClick={() => scrollTo("features")}
            className="hover:text-violet-400 transition duration-300 cursor-pointer"
          >
            Features
          </li>

          <li
            onClick={() => scrollTo("about")}
            className="hover:text-violet-400 transition duration-300 cursor-pointer"
          >
            About
          </li>

        </ul> */}


        {/* Mobile Menu Button */}
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


      {/* Mobile Menu
      {isOpen && (
        <div className="md:hidden bg-[#111827] px-6 py-5 space-y-4 border-t border-violet-800/20">

          <div
            onClick={() => goTo("/candidates")}
            className="hover:text-violet-400 cursor-pointer"
          >
            Home
          </div>

          <div
            onClick={() => scrollTo("features")}
            className="hover:text-violet-400 cursor-pointer"
          >
            Features
          </div>

          <div
            onClick={() => scrollTo("about")}
            className="hover:text-violet-400 cursor-pointer"
          >
            About
          </div>

        </div>
      )} */}

    </nav>
  );
}