import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import CandidateCard from "../components/CandidateCard";

const candidates = [
  {
    id: 1,
    name: "Aarav Sharma",
    initials: "AS",
    role: "AI Engineering Learner",
    completedMissions: 24,
    attempts: 31,
    progress: 78,
  },
  {
    id: 2,
    name: "Priya Mehta",
    initials: "PM",
    role: "AI Engineering Learner",
    completedMissions: 27,
    attempts: 35,
    progress: 87,
  },
  {
    id: 3,
    name: "Rohan Patel",
    initials: "RP",
    role: "AI Engineering Learner",
    completedMissions: 18,
    attempts: 25,
    progress: 61,
  },
  {
    id: 4,
    name: "Ananya Rao",
    initials: "AR",
    role: "AI Engineering Learner",
    completedMissions: 30,
    attempts: 38,
    progress: 94,
  },
];

export default function CandidateSelection() {
  const navigate = useNavigate();

  const handleSelectCandidate = (candidate) => {
    navigate("/briefing", {
      state: {
        candidate,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#0B1020] text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0B1020]/80 backdrop-blur-lg">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">

            <Send
              size={22}
              className="text-violet-400 rotate-[-20deg]"
            />

            <span className="text-xl font-bold">
              Interview
              <span className="text-violet-400">
                Pilot
              </span>
            </span>

          </div>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <ArrowLeft size={17} />
            Back
          </button>

        </div>

      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-16">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <p className="text-violet-400 text-sm font-medium mb-3">
            INTERVIEW SETUP
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Select a Candidate
          </h1>

          <p className="text-gray-400 mt-5 leading-7">
            Choose a candidate profile to begin a personalized
            technical interview based on their learning journey.
          </p>

        </div>

        {/* Candidate Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">

          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onSelect={handleSelectCandidate}
            />
          ))}

        </div>

      </main>

    </div>
  );
}