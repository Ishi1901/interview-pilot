import express from "express";

import {
  startInterview,
  continueInterview,
} from "../services/interviewService.js";

import curriculum from "../data/curriculum.json" with {
  type: "json"
};

const router = express.Router();


router.post("/interview", (req, res) => {
  try {
    const {
      sessionId,
      candidate,
      message,
    } = req.body;


    // -----------------------------
    // START INTERVIEW
    // -----------------------------

    if (candidate && !message) {

      if (!sessionId) {
        return res.status(400).json({
          error: "sessionId is required.",
        });
      }

      const result = startInterview(
        sessionId,
        candidate,
        curriculum
      );

      return res.json(result);
    }


    // -----------------------------
    // CONTINUE INTERVIEW
    // -----------------------------

    if (message) {

      if (!sessionId) {
        return res.status(400).json({
          error: "sessionId is required.",
        });
      }

      const result =
        continueInterview(
          sessionId,
          message
        );

      return res.json(result);
    }


    // -----------------------------
    // INVALID REQUEST
    // -----------------------------

    return res.status(400).json({
      error:
        "Request must contain candidate or message.",
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: error.message,
    });
  }
});


export default router;