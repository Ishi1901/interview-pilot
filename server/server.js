import express from "express";
import cors from "cors";
import interviewRoutes from "./routes/interviewRoutes.js";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "InterviewPilot API is running 🚀",
  });
});

app.use("/api", interviewRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `InterviewPilot server running on port ${PORT}`
  );
});