import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CandidateCard({ candidate, onSelect }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-violet-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/20 transition-all duration-300">

      {/* Candidate Header */}
      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-lg font-bold">
          {candidate.initials}
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            {candidate.name}
          </h2>

          <p className="text-sm text-gray-400">
            {candidate.role}
          </p>
        </div>

      </div>

      {/* Progress */}
      <div className="mt-6">

        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">
            Learning Progress
          </span>

          <span className="text-violet-400">
            {candidate.progress}%
          </span>
        </div>

        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-400"
            style={{ width: `${candidate.progress}%` }}
          />
        </div>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mt-6">

        <div className="rounded-xl bg-white/5 p-3">
          <p className="text-xs text-gray-500">
            Completed Missions
          </p>

          <p className="text-lg font-semibold mt-1">
            {candidate.completedMissions}
          </p>
        </div>

        <div className="rounded-xl bg-white/5 p-3">
          <p className="text-xs text-gray-500">
            Attempts
          </p>

          <p className="text-lg font-semibold mt-1">
            {candidate.attempts}
          </p>
        </div>

      </div>

      {/* Status */}
      <div className="flex items-center gap-2 mt-5 text-sm text-gray-400">

        <CheckCircle2
          size={16}
          className="text-violet-400"
        />

        Ready for interview

      </div>

      {/* Button */}
      <button
        onClick={() => onSelect(candidate)}
        className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 flex items-center justify-center gap-2 hover:scale-[1.02] transition"
      >
        Start Interview
        <ArrowRight size={17} />
      </button>

    </div>
  );
}

