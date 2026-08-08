import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">

      {/* Left */}

      <div>

        <span className="inline-block px-4 py-2 rounded-full text-sm bg-violet-500/20 border border-violet-500/30 text-violet-300">
          Built for AB Talks AI Cohort Hackathon
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

          <button className="flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:scale-105 transition">

            Start Interview

            <ArrowRight size={18} />

          </button>

          <button className="px-7 py-3 rounded-full border border-gray-700 hover:border-violet-500 transition">
            Learn More
          </button>

        </div>

      </div>

      {/* Right */}

      <div className="relative">

        <div className="rounded-3xl border border-violet-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

          <div className="flex justify-between">

            <div>

              <p className="text-violet-400 text-sm">
                AI Interviewer
              </p>

              <h4 className="font-semibold mt-2">
                Question 3 / 8
              </h4>

            </div>

            <span className="text-sm text-gray-400">
              Live
            </span>

          </div>

          <div className="mt-8 rounded-xl bg-[#161B33] p-5">

            Explain how vector databases differ from
            traditional SQL databases.

          </div>

          <div className="mt-5 flex justify-end">

            <div className="bg-violet-600 rounded-xl px-4 py-3 max-w-xs">

              Vector databases perform semantic search
              using embeddings...

            </div>

          </div>

          <div className="mt-6">

            <div className="flex justify-between text-sm text-gray-400">

              <span>AI is analyzing your answer...</span>

              <span>35%</span>

            </div>

            <div className="h-2 rounded-full bg-gray-700 mt-2">

              <div className="w-1/3 h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>

            </div>

          </div>

        </div>

        {/* Glow */}

        <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-violet-700 rounded-full blur-[120px] opacity-30"></div>

      </div>

    </section>
  );
}