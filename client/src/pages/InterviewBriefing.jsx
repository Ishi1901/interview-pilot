import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  BookOpen,
  Target,
} from "lucide-react";

export default function InterviewBriefing() {
  const location = useLocation();
  const navigate = useNavigate();

  const candidate = location.state?.candidate;

  // If someone opens /briefing directly
  // without selecting a candidate
  if (!candidate) {
    return (
      <div className="min-h-screen bg-[#0B1020] text-white flex items-center justify-center px-6">
        <div className="text-center">

          <Bot className="mx-auto text-violet-400 mb-5" size={48} />

          <h1 className="text-2xl font-bold">
            No candidate selected
          </h1>

          <p className="text-gray-400 mt-3">
            Please select a candidate before starting an interview.
          </p>

          <button
            onClick={() => navigate("/candidates")}
            className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 hover:scale-105 transition"
          >
            Select Candidate
          </button>

        </div>
      </div>
    );
  }

  const handleBeginInterview = () => {
    navigate("/interview", {
      state: {
        candidate,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#0B1020] text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0B1020]/80 backdrop-blur-lg">

        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <Bot className="text-violet-400" size={24} />

            <span className="text-xl font-bold">
              Interview
              <span className="text-violet-400">
                Pilot
              </span>
            </span>
          </div>

          <button
            onClick={() => navigate("/candidates")}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <ArrowLeft size={17} />
            Back
          </button>

        </div>

      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-14">

        {/* Heading */}
        <div className="text-center">

          <p className="text-violet-400 text-sm font-medium tracking-wider">
            INTERVIEW SETUP
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Interview Briefing
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Your interview will be personalized around the
            candidate's learning journey throughout the AB Talks
            AI Cohort.
          </p>

        </div>

        {/* Candidate Card */}
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-xl font-bold">
              {candidate.initials}
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                {candidate.name}
              </h2>

              <p className="text-gray-400">
                {candidate.role}
              </p>
            </div>

          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mt-7">

            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-sm text-gray-500">
                Completed Missions
              </p>

              <p className="text-2xl font-bold mt-1">
                {candidate.completedMissions}
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-sm text-gray-500">
                Attempts
              </p>

              <p className="text-2xl font-bold mt-1">
                {candidate.attempts}
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-sm text-gray-500">
                Learning Progress
              </p>

              <p className="text-2xl font-bold mt-1 text-violet-400">
                {candidate.progress}%
              </p>
            </div>

          </div>

        </section>

        {/* Interview Focus */}
        <section className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">

            <div className="w-11 h-11 rounded-xl bg-violet-500/20 flex items-center justify-center mb-5">
              <Target className="text-violet-400" />
            </div>

            <h2 className="text-xl font-semibold">
              Interview Focus
            </h2>

            <p className="text-gray-400 leading-7 mt-3">
              Questions will be personalized around the
              candidate's completed topics from the AI Cohort.
              The interviewer will adapt based on the candidate's
              responses.
            </p>

          </div>

          {/* Format */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">

            <div className="w-11 h-11 rounded-xl bg-violet-500/20 flex items-center justify-center mb-5">
              <BookOpen className="text-violet-400" />
            </div>

            <h2 className="text-xl font-semibold">
              Interview Format
            </h2>

            <ul className="mt-4 space-y-3">

              <li className="flex gap-3 text-gray-400">
                <CheckCircle2
                  size={18}
                  className="text-violet-400 shrink-0 mt-1"
                />
                Minimum 8 questions
              </li>

              <li className="flex gap-3 text-gray-400">
                <CheckCircle2
                  size={18}
                  className="text-violet-400 shrink-0 mt-1"
                />
                At least 4 curriculum days
              </li>

              <li className="flex gap-3 text-gray-400">
                <CheckCircle2
                  size={18}
                  className="text-violet-400 shrink-0 mt-1"
                />
                Adaptive follow-up questions
              </li>

              <li className="flex gap-3 text-gray-400">
                <CheckCircle2
                  size={18}
                  className="text-violet-400 shrink-0 mt-1"
                />
                Context maintained throughout
              </li>

              <li className="flex gap-3 text-gray-400">
                <CheckCircle2
                  size={18}
                  className="text-violet-400 shrink-0 mt-1"
                />
                Structured feedback at the end
              </li>

            </ul>

          </div>

        </section>

        {/* Begin */}
        <div className="text-center mt-10">

          <button
            onClick={handleBeginInterview}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 font-semibold hover:scale-105 transition shadow-lg shadow-violet-900/30"
          >
            Begin Interview
            <ArrowRight size={19} />
          </button>

          <p className="text-xs text-gray-600 mt-4">
            Take your time. The interviewer will adapt to your responses.
          </p>

        </div>

      </main>

    </div>
  );
}