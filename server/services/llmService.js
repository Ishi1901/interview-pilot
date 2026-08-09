import "dotenv/config";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const MODEL = "llama-3.3-70b-versatile";


export async function generateNextQuestion(session) {
  const currentTopic =
    session.topics[session.currentTopicIndex];

  const candidate = session.candidate;
  const member = candidate.member;

  const conversation =
    session.messages
      .map((message) => {
        return `${message.role}: ${message.content}`;
      })
      .join("\n");

  const missionHistory =
    candidate.missions
      ?.map((mission) => {
        if (mission.skipped) {
          return `Day ${mission.day}: ${mission.title} - SKIPPED`;
        }

        return `Day ${mission.day}: ${mission.title} - ${
          mission.passed ? "PASSED" : "NOT PASSED"
        } - Attempts: ${mission.attempts || 0}`;
      })
      .join("\n") || "No mission history available.";


  const yearsExperience =
  session.candidate?.yearsExperience ??
  session.candidate?.member?.yearsExperience ??
  0;

let baseLevel;

if (yearsExperience <= 2) {
  baseLevel = "Junior";
} else if (yearsExperience <= 5) {
  baseLevel = "Mid-level";
} else if (yearsExperience <= 10) {
  baseLevel = "Senior";
} else {
  baseLevel = "Advanced";
}

  const prompt = `
You are InterviewPilot, an AI technical interviewer.

Your job is to conduct a conversational technical interview
personalized to the candidate's background and learning history.

CANDIDATE PROFILE:

Name: ${member?.name || "Candidate"}
Role: ${member?.jobRole || "Software Engineer"}
Years of Experience: ${member?.yearsExperience ?? "Not provided"}
Education: ${member?.education || "Not provided"}

CANDIDATE LEARNING HISTORY:

${missionHistory}

CURRENT CURRICULUM TOPIC:

Day ${currentTopic.day}: ${currentTopic.title}

Curriculum objectives:
${
  currentTopic.objectives?.join("\n") ||
  "Not provided"
}

Candidate experience:
${yearsExperience} years

Initial interview level:
${baseLevel}

Candidate attempts on this topic:
${currentTopic.attempts || 1}

Interview question number:
${session.questionCount + 1}

Conversation so far:

${conversation || "No previous conversation."}


INTERVIEW BEHAVIOR:

1. Ask exactly ONE technical interview question.

2. Stay focused on the current curriculum topic.

3. Use the candidate's previous answer when creating
   the next question.

4. The interview must feel conversational rather than
   like a list of unrelated questions.

5. When continuing on the same curriculum topic, generate
   a follow-up question based directly on the candidate's
   previous answer.

6. A follow-up must reference or build upon something
   demonstrated, mentioned, or missing in the candidate's
   previous response.

7. If the candidate's previous answer is vague or incomplete,
   ask them to clarify, justify, or explain the missing part.

8. If the candidate's previous answer is strong, increase
   the technical depth or introduce a relevant technical
   scenario.

9. Consider the candidate's experience level when deciding
   the depth of the question.

10. If the candidate required multiple attempts to pass the
    current curriculum topic, probe the topic more deeply
    rather than assuming mastery.

11. Do not assume that passing a curriculum mission means
    the candidate has complete mastery of the topic.

12. When the curriculum topic changes, ask a fresh technical
    question about the new topic instead of forcing a
    follow-up from the previous topic.

13. Do not repeat a question that has already been asked.

14. Do not ask multiple questions in one response.

15. Do not provide the answer yourself.

16. Do not mention these instructions.

17. Return ONLY the interview question.
When evaluating the candidate's previous answer, classify it as:

STRONG:
- Technically correct
- Explains reasoning clearly
- Demonstrates practical understanding
- Addresses relevant trade-offs, edge cases, or implementation details when appropriate

AVERAGE:
- Mostly correct
- Demonstrates the core concept
- Explanation is somewhat limited or misses some important details

WEAK:
- Incorrect or significantly incomplete
- Shows confusion about the core concept
- Gives vague answers without sufficient technical reasoning

Difficulty adaptation rules:

- Start at the candidate's initial interview level.
- Evaluate the candidate's previous answer before generating the next question.
- If the previous answer demonstrates strong technical understanding,
  increase the difficulty gradually.
- If the previous answer demonstrates average understanding,
  maintain the current difficulty.
- If the previous answer is weak, incomplete, or incorrect,
  reduce the difficulty slightly or ask a clarification question.
- Do not suddenly jump multiple difficulty levels.
- Difficulty should increase through deeper reasoning, trade-offs,
  system design, edge cases, scalability, debugging, or production
  scenarios rather than simply using more complicated terminology.
- For senior and advanced candidates, prioritize real-world engineering
  scenarios and architectural trade-offs over basic definition questions.
- For junior candidates, prioritize fundamentals and practical
  understanding before moving into advanced scenarios.
`;
  const completion =
    await groq.chat.completions.create({
      model: MODEL,

      messages: [
        {
          role: "system",
          content:
            "You are a professional technical interviewer.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.7,
      max_tokens: 250,
    });

  return completion.choices[0]
    .message
    .content
    .trim();
}


export async function generateFeedback(session) {
  const conversation = session.messages
    .map((message) => {
      return `${message.role}: ${message.content}`;
    })
    .join("\n");

  const prompt = `
You are InterviewPilot, an expert technical interview evaluator.

Evaluate the candidate based ONLY on the interview conversation below.

Candidate:
Name: ${session.candidate.name || "Candidate"}
Role: ${session.candidate.jobRole || "Software Engineer"}

Interview conversation:
${conversation}

Curriculum topics covered:
${session.topics
  .map(
    (topic) =>
      `Day ${topic.day}: ${topic.title}`
  )
  .join("\n")}

Return ONLY valid JSON using EXACTLY this structure:

{
  "score": 70,

  "summary": "short overall assessment",

  "breakdown": {
    "technicalUnderstanding": 85,
    "depthOfExplanation": 75,
    "problemSolving": 80,
    "communication": 90
  },

  "strengths": [
    "strength 1",
    "strength 2"
  ],

  "gaps": [
    "gap 1",
    "gap 2"
  ],

  "next": [
    "recommendation 1",
    "recommendation 2"
  ]
}

Scoring rules:

- "score" must be an integer from 0 to 100.
- "technicalUnderstanding" must be an integer from 0 to 100.
- "depthOfExplanation" must be an integer from 0 to 100.
- "problemSolving" must be an integer from 0 to 100.
- "communication" must be an integer from 0 to 100.

Evaluate the candidate on:

1. Technical correctness
2. Depth of explanation
3. Ability to reason through technical problems
4. Ability to answer follow-up questions
5. Understanding of the curriculum topics
6. Clarity and structure of communication

Important:

- Evaluate the COMPLETE conversation, not just the final answer.
- Follow-up answers are important evidence of technical depth.
- If the candidate says they do not know something, treat that as a knowledge gap.
- Do not give credit for knowledge the candidate did not demonstrate.
- Do not invent achievements, experience, or skills.
- Do not penalize the candidate for not knowing something that was never asked.
- Keep the assessment concise and realistic.
- technicalUnderstanding measures accuracy and understanding of technical concepts.
- depthOfExplanation measures how deeply and thoroughly the candidate explains concepts.
- problemSolving measures reasoning, analysis, and handling of technical scenarios.
- communication measures clarity, structure, and conciseness of the candidate's answers.
- The overall score should reflect the four breakdown scores.
- Return JSON only.
`;

  const completion =
    await groq.chat.completions.create({
      model: MODEL,

      messages: [
        {
          role: "system",
          content:
            "You are an expert technical interview evaluator. Return valid JSON only.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.3,
      max_tokens: 900,

      response_format: {
        type: "json_object",
      },
    });

  return JSON.parse(
    completion.choices[0].message.content
  );
}