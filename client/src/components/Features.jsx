import { Brain, Bot, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Adaptive Questions",
    desc: "Generate personalized technical interview questions based on completed curriculum topics and candidate progress.",
  },
  {
    icon: Brain,
    title: "Intelligent Follow-ups",
    desc: "Analyze every response in real time and ask contextual follow-up questions just like a real interviewer.",
  },
  {
    icon: BarChart3,
    title: "Actionable Feedback",
    desc: "Receive strengths, improvement areas, and recommended topics after every interview.",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-16">

        <h2 className="text-4xl font-bold">
          Why Choose{" "}
          <span className="text-violet-400">
            InterviewPilot
          </span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          An AI-powered interview platform that adapts to every
          candidate's learning journey.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-violet-500/20 rounded-3xl p-8 hover:border-violet-500 hover:-translate-y-2 transition duration-300 shadow-lg"
          >
            <feature.icon
              size={42}
              className="text-violet-400 mb-6"
            />

            <h3 className="text-2xl font-semibold mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-400 leading-7">
              {feature.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}