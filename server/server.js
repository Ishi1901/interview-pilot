import express from "express";
import cors from "cors";
import interviewRoutes from "./routes/interviewRoutes.js";

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "InterviewPilot API is running 🚀",
  });
});

app.use("/api", interviewRoutes);

app.listen(PORT, () => {
  console.log(
    `InterviewPilot server running on http://localhost:${PORT}`
  );
});