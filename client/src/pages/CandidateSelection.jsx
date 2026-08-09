import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import CandidateCard from "../components/CandidateCard";

export default function CandidateSelection() {
  const navigate = useNavigate();

  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/candidates"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch candidates.");
        }

        const data = await response.json();

        const formattedCandidates = data.candidates.map(
          (candidate) => ({
            // Keep the COMPLETE original candidate
            // so we can send it to the interview later.
            ...candidate,

            // Fields used by CandidateCard
            id: candidate.member.id,
            name: candidate.member.name,
            initials: candidate.member.name
              .split(" ")
              .map((word) => word[0])
              .join(""),
            role: candidate.member.jobRole,

            completedMissions:
              candidate.signals.missionsCompleted,

            attempts:
              candidate.missions.reduce(
                (total, mission) =>
                  total + (mission.attempts || 0),
                0
              ),

            progress: Math.min(
              100,
            Math.round(
              (candidate.signals.missionsCompleted / 30) * 100
            )
          ),
          })
        );

        setCandidates(formattedCandidates);
      } catch (error) {
        console.error("Candidate fetch error:", error);
        setError("Unable to load candidates.");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const handleSelectCandidate = (candidate) => {
    navigate("/briefing", {
      state: {
        candidate,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#0B0B2F] text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0B0B2F]/80 backdrop-blur-lg">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

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

        {/* Loading */}
        {loading && (
          <div className="text-center text-gray-400 mt-14">
            Loading candidates...
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center text-red-400 mt-14">
            {error}
          </div>
        )}

        {/* Candidate Grid */}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">

            {candidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                onSelect={handleSelectCandidate}
              />
            ))}

          </div>
        )}

      </main>

    </div>
  );
}