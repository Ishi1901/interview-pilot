import { selectInterviewTopics } from "./interviewPlanner.js";
import {
  generateNextQuestion,
  generateFeedback,
} from "./llmService.js";
import {
  createInterviewSession,
  addAssistantMessage,
  addCandidateMessage,
  incrementQuestion,
  getCurrentTopic,
  moveToNextTopic,
  canFinishInterview,
} from "./interviewController.js";

const sessions = new Map();

// START INTERVIEW
export async function startInterview(
  sessionId,
  candidate,
  curriculum
) {
  const topics = selectInterviewTopics(
    candidate,
    curriculum
  );

  const session = createInterviewSession(
    sessionId,
    candidate,
    topics
  );
  session.startedAt = Date.now();
  session.followUpCount = 0;

  sessions.set(sessionId, session);

  const firstTopic = getCurrentTopic(session);

  // Mark the first curriculum day as covered.
  session.topicsCovered.add(firstTopic.day);

  const firstQuestion =await generateNextQuestion(session);

  incrementQuestion(session);

  addAssistantMessage(
    session,
    firstQuestion
  );

  return {
    reply: firstQuestion,
    done: false,
  };
}


// CONTINUE INTERVIEW
export async function continueInterview(
  sessionId,
  message
) {
  const session = sessions.get(sessionId);

  if (!session) {
    throw new Error(
      "Interview session not found."
    );
  }

  // Save candidate's answer.
  addCandidateMessage(
    session,
    message
  );

  /*
    We do NOT finish the interview until:

    1. At least 8 questions have been asked.
    2. At least 4 curriculum days have been covered.
  */

  if (!canFinishInterview(session)) {

    /*
      Temporary interview structure:

      - Every second question is a follow-up
        on the current topic.
      - After two questions, move to the
        next curriculum topic.

      Later this can be replaced with
      AI-based topic progression.
    */

    if (
      session.questionCount % 2 === 0
    ) {
      // Move to a new curriculum topic.
      const moved =
        moveToNextTopic(session);

      if (moved) {
        const newTopic =
          getCurrentTopic(session);

        session.topicsCovered.add(
          newTopic.day
        );
      }
    } else {
      /*
        We are staying on the same topic,
        so the next question is a follow-up.
      */

      session.followUpCount += 1;
    }

    const nextQuestion =
      await generateNextQuestion(
        session
      );

    incrementQuestion(session);

    addAssistantMessage(
      session,
      nextQuestion
    );

    return {
      reply: nextQuestion,
      done: false,
    };
  }

  // Interview requirements have been satisfied.
  session.done = true;

  const feedback =
    await generateFeedback(session);

  // Calculate interview duration.
  const durationMs =
    Date.now() - session.startedAt;

  const durationMinutes =
    Math.max(
      1,
      Math.round(durationMs / 60000)
    );

  const stats = {
    questions: session.questionCount,
    followUps: session.followUpCount,
    curriculumDays:
      session.topicsCovered.size,
    duration: `${durationMinutes} min`,
  };

  sessions.delete(sessionId);

  return {
    reply: "Interview completed.",
    done: true,
    feedback,
    stats,
  };
}


