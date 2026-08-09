import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import CandidateCard from "../components/CandidateCard";
import candidatesData from "../data/candidates.json";

const candidates = candidatesData.candidates.map((candidate) => {
  const member = candidate.member;

  const completedMissions = candidate.missions.filter(
    (mission) => mission.passed
  ).length;

  const attempts = candidate.missions.reduce(
    (total, mission) => total + (mission.attempts || 0),
    0
  );

  const progress = Math.round(
    (completedMissions / candidate.missions.length) * 100
  );

  return {
    id: member.id,
    name: member.name,
    initials: member.name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2),
    role: member.jobRole,
    completedMissions,
    attempts,
    progress,

    // Keep the complete candidate data!
    member,
    missions: candidate.missions,
    signals: candidate.signals,
  };
});

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