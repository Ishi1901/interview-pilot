import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  Bot,
  CheckCircle2,
  ArrowRight,
  Home,
  TrendingUp,
  Target,
  Brain,
  MessageSquare,
} from "lucide-react";


export default function Feedback() {
  const navigate = useNavigate();
const location = useLocation();

const feedback = location.state?.feedback;
const stats = location.state?.stats;
const breakdown = [
  {
    title: "Technical Understanding",
    score: null,
    icon: Brain,
  },
  {
    title: "Depth of Explanation",
    score: null,
    icon: Target,
  },
  {
    title: "Problem Solving",
    score: null,
    icon: TrendingUp,
  },
  {
    title: "Communication",
    score: null,
    icon: MessageSquare,
  },
];    
if (!feedback) {
  return (
    <div className="min-h-screen bg-[#0B1020] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          No interview feedback found.
        </h1>

        <button
          onClick={() => navigate("/candidates")}
          className="mt-6 px-6 py-3 rounded-xl bg-violet-600"
        >
          Start Interview
        </button>
      </div>
    </div>
  );
}
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

          <span className="text-sm text-green-400">
            Interview Complete
          </span>

        </div>

      </header>


      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* Heading */}
        <div className="text-center">

          <p className="text-violet-400 text-sm font-medium tracking-wider">
            PERFORMANCE REPORT
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Your Interview Feedback
          </h1>

          <p className="text-gray-400 mt-4">
            Here's how you performed during your technical interview.
          </p>

        </div>


        {/* Overall Score */}
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Score */}
            <div className="relative w-40 h-40 rounded-full border-[10px] border-violet-500/20 flex items-center justify-center">

              <div className="text-center">

                <p className="text-4xl font-bold">
                  {feedback.score}
                </p>

                <p className="text-xs text-gray-500">
                  / 100
                </p>

              </div>

            </div>


            {/* Summary */}
            <div className="flex-1">

              <h2 className="text-2xl font-semibold">
                Strong Performance
              </h2>

              <p className="text-gray-400 leading-7 mt-3">
                {feedback.summary}
              </p>

            </div>

          </div>

        </section>


        {/* Performance Breakdown */}
        <section className="mt-8">

          <h2 className="text-2xl font-semibold mb-5">
            Performance Breakdown
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {breakdown.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center">

                        <Icon
                          size={19}
                          className="text-violet-400"
                        />

                      </div>

                      <span>
                        {item.title}
                      </span>

                    </div>

                    <span className="font-semibold">
                      {item.score !== null ? `${item.score}%` : "—"}
                    </span>

                  </div>


                  <div className="h-2 bg-white/10 rounded-full mt-5 overflow-hidden">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-400"
                      style={{
                      width: item.score !== null
                      ? `${item.score}%`
                      : "0%",
                  }}
                    />

                  </div>

                </div>
              );
            })}

          </div>

        </section>


        {/* Strengths + Improvements */}
        <section className="grid md:grid-cols-2 gap-6 mt-10">

          {/* Strengths */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <h2 className="text-xl font-semibold">
              Strengths
            </h2>

            <div className="space-y-4 mt-5">

              {feedback.strengths.map((strength) => (

                <div
                  key={strength}
                  className="flex gap-3"
                >

                  <CheckCircle2
                    size={19}
                    className="text-green-400 shrink-0 mt-1"
                  />

                  <p className="text-gray-400">
                    {strength}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* Improvements */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <h2 className="text-xl font-semibold">
              Areas to Improve
            </h2>

            <div className="space-y-4 mt-5">

              {feedback.gaps.map((item) => (

                <div
                  key={item}
                  className="flex gap-3"
                >

                  <ArrowRight
                    size={19}
                    className="text-violet-400 shrink-0 mt-1"
                  />

                  <p className="text-gray-400">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* Curriculum Coverage */}
        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7">

          <h2 className="text-xl font-semibold">
            Curriculum Coverage
          </h2>

          <p className="text-gray-500 mt-2">
            Topics assessed during this interview.
          </p>

          <div className="flex flex-wrap gap-3 mt-5">

            {[
            "Retrieval-Augmented Generation",
            "Vector Databases",
            "Prompt Engineering",
            "Agentic AI",
            ].map((topic) => (

              <span
                key={topic}
                className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm"
              >
                {topic}
              </span>

            ))}

          </div>

        </section>


        {/* Interview Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <p className="text-gray-500 text-sm">
              Questions
            </p>
            <p className="text-2xl font-bold mt-1">
            {stats?.questions ?? 0}
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <p className="text-gray-500 text-sm">
              Follow-ups
            </p>
            <p className="text-2xl font-bold mt-1">
            {stats?.followUps ?? 0}
              </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <p className="text-gray-500 text-sm">
              Curriculum Days
            </p>
            <p className="text-2xl font-bold mt-1">
             {stats?.curriculumDays ?? 0}
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <p className="text-gray-500 text-sm">
              Duration
            </p>
            <p className="text-2xl font-bold mt-1">
            {stats?.duration ?? "—"}
            </p>
          </div>

        </section>


        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">

          <button
            onClick={() => navigate("/candidates")}
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 font-semibold hover:scale-105 transition"
          >
            Try Another Interview
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-7 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </button>

        </div>

      </main>

    </div>
  );
}