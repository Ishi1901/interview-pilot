import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B2F]">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Logo + Description */}
          <div className="max-w-md">

            <div className="flex items-center gap-2">

              <Send
                className="text-violet-500 rotate-[-20deg]"
                size={22}
              />

              <h2 className="text-xl font-bold">
                Interview
                <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                  Pilot
                </span>
              </h2>

            </div>

            <p className="mt-4 text-sm text-gray-400 leading-6">
              AI-powered technical interview practice that adapts
              to each candidate's learning journey.
            </p>

          </div>


          {/* Hackathon */}
          <div className="text-left md:text-right">

            <p className="text-sm text-gray-400">
              Built for
            </p>

            <p className="text-sm font-medium text-gray-200 mt-1">
              AB Talks AI Cohort Hackathon
            </p>

          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-xs text-gray-500">
            © 2026 InterviewPilot. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Built with AI · Designed for better interviews
          </p>

        </div>

      </div>

    </footer>
  );
}