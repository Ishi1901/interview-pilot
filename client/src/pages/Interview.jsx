import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Send,
  Bot,
  User,
  LogOut,
  LoaderCircle,
} from "lucide-react";

export default function Interview() {
 const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      text: "Welcome! Let's begin your technical interview.",
    },
    {
      id: 2,
      type: "ai",
      text:
        "Explain the concept of Retrieval-Augmented Generation (RAG) and why it is useful.",
    },
  ]);

  const handleSubmit = () => {
    if (!answer.trim()) return;

    const candidateMessage = {
      id: Date.now(),
      type: "candidate",
      text: answer,
    };

    setMessages((prev) => [...prev, candidateMessage]);
    setAnswer("");
    setIsAnalyzing(true);

    // Temporary mock AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "ai",
          text:
            "Good. Can you explain how a vector database is involved in a typical RAG pipeline?",
        },
      ]);

      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0B1020] text-white flex flex-col">

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0B1020]/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Bot className="text-violet-400" size={25} />

            <span className="text-xl font-bold">
              Interview
              <span className="text-violet-400">
                Pilot
              </span>
            </span>
          </div>

          {/* Interview Info */}
          <div className="hidden md:flex items-center gap-6 text-sm">

            <div>
              <p className="text-gray-500">
                Candidate
              </p>

              <p className="font-medium">
                Alex Johnson
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Interview
              </p>

              <p className="font-medium">
                Technical Interview
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Progress
              </p>

              <p className="font-medium">
                Question 1 of 8
              </p>
            </div>

          </div>

          {/* Exit */}
          <button
           onClick={() => navigate("/candidates")}
            className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition"
>
          <LogOut size={18} />
          <span className="hidden sm:inline">
                 Exit
            </span>
           </button>

        </div>
      </header>


      {/* Progress Bar */}
      <div className="w-full h-1 bg-white/5">
        <div className="h-full w-[12.5%] bg-gradient-to-r from-violet-600 to-purple-400" />
      </div>


      {/* Conversation */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-8">

        <div className="space-y-6">

          {messages.map((message) => (

            <div
              key={message.id}
              className={`flex gap-3 ${
                message.type === "candidate"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              {/* AI Icon */}
              {message.type === "ai" && (
                <div className="w-9 h-9 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                  <Bot
                    size={18}
                    className="text-violet-400"
                  />
                </div>
              )}

              <div
                className={`max-w-[75%] rounded-2xl px-5 py-4 ${
                  message.type === "ai"
                    ? "bg-white/5 border border-white/10"
                    : "bg-violet-600"
                }`}
              >
                <p className="text-sm leading-7">
                  {message.text}
                </p>
              </div>

              {/* Candidate Icon */}
              {message.type === "candidate" && (
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <User size={18} />
                </div>
              )}

            </div>

          ))}


          {/* AI Analyzing */}
          {isAnalyzing && (
            <div className="flex items-center gap-3 text-gray-400">

              <div className="w-9 h-9 rounded-full bg-violet-500/20 flex items-center justify-center">
                <Bot size={18} className="text-violet-400" />
              </div>

              <div className="flex items-center gap-2 text-sm">

                <LoaderCircle
                  size={16}
                  className="animate-spin text-violet-400"
                />

                AI is analyzing your response...

              </div>

            </div>
          )}

        </div>

      </main>


      {/* Answer Input */}
      <div className="border-t border-white/10 bg-[#0B1020]/90 backdrop-blur-lg">

        <div className="max-w-4xl mx-auto px-6 py-5">

          <div className="flex gap-3 items-end">

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer..."
              rows={3}
              className="flex-1 resize-none rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-sm outline-none focus:border-violet-500 transition placeholder:text-gray-600"
            />

            <button
              onClick={handleSubmit}
              disabled={!answer.trim() || isAnalyzing}
              className="h-12 px-5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition"
            >
              <Send size={18} />
              <span className="hidden sm:inline">
                Submit
              </span>
            </button>

          </div>

          <p className="text-xs text-gray-600 mt-3 text-center">
            Take your time and explain your reasoning clearly.
          </p>

        </div>

      </div>

    </div>
  );
}