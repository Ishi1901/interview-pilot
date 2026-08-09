import { ArrowRight } from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">

      {/* Left */}

      <div>

        <span className="inline-block px-4 py-2 rounded-full text-sm bg-violet-500/20 border border-violet-500/30 text-violet-300">
          AI Powered Technical Interview Platform
        </span>

        <h1 className="text-6xl font-extrabold mt-8 leading-tight">
          Practice Smarter.
          <br />

          <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
            Interview Better.
          </span>

        </h1>

        <p className="mt-6 text-lg text-gray-400 leading-8 max-w-xl">
          Experience personalized AI interviews that adapt to your
          learning journey, ask intelligent follow-up questions,
          and provide actionable technical feedback.
        </p>

        <div className="flex gap-5 mt-10">

          <button onClick={() => navigate("/candidates")} className="flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:scale-105 transition">

            Start Interview

            <ArrowRight size={18} />

          </button>

          <button className="px-7 py-3 rounded-full border border-gray-700 hover:border-violet-500 transition">
            Learn More
          </button>

        </div>

      </div>

      {/* Right */}

      {/* Right - AI Interviewer Illustration */}

<div className="relative flex items-center justify-center">

  <img
    src="/interviewpilot-hero-img.png"
    alt="AI InterviewPilot interviewer"
    className="w-full max-w-2xl object-contain"
  />

  {/* Purple glow behind image */}
  <div className="absolute -z-10 w-80 h-80 bg-violet-700 rounded-full blur-[140px] opacity-30"></div>

</div>

        {/* Glow */}

        <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-violet-700 rounded-full blur-[120px] opacity-30"></div>

     

    </section>
  );
}