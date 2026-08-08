import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-violet-500/20 bg-[#0B1020] mt-24">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Logo */}

        <div>

          <div className="flex items-center gap-2">

            <Send className="text-violet-500 rotate-[-20deg]" />

            <h2 className="text-2xl font-bold">
              Interview
              <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                Pilot
              </span>
            </h2>

          </div>

          <p className="mt-5 text-gray-400 leading-7">
            AI-powered technical interview platform built for
            personalized learning and interview preparation.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-lg font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-violet-400 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-violet-400 cursor-pointer transition">
              Features
            </li>

            <li className="hover:text-violet-400 cursor-pointer transition">
              About
            </li>

          </ul>

        </div>

        {/* Tech Stack */}

        <div>

          <h3 className="text-lg font-semibold mb-5">
            Tech Stack
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>⚛ React</li>
            <li>🚀 Node.js</li>
            <li>⚡ Express</li>
            <li>🤖 Gemini API</li>
            <li>🎨 Tailwind CSS</li>

          </ul>

        </div>

      </div>

      <div className="border-t border-violet-500/10 py-5 text-center text-gray-500 text-sm">

        © 2026 InterviewPilot • Built for the AB Talks AI Cohort Hackathon

      </div>

    </footer>
  );
}