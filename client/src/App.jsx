import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import CandidateSelection from "./pages/CandidateSelection";
import InterviewBriefing from "./pages/InterviewBriefing";
import Interview from "./pages/Interview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/candidates"
          element={<CandidateSelection />}
        />

        <Route
          path="/briefing"
          element={<InterviewBriefing />}
        />

        <Route
          path="/interview"
          element={<Interview />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;