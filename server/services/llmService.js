import "dotenv/config";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const MODEL = "llama-3.3-70b-versatile";


export async function generateNextQuestion(session) {
  const currentTopic =
    session.topics[session.currentTopicIndex];

  const conversation =
    session.messages
      .map((message) => {
        return `${message.role}: ${message.content}`;
      })
      .join("\n");


  const prompt = `
You are InterviewPilot, an AI technical interviewer.

Your job is to conduct a conversational technical interview.

Candidate:
Name: ${session.candidate.name || "Candidate"}
Role: ${session.candidate.jobRole || "Software Engineer"}

Current curriculum topic:
Day ${currentTopic.day}: ${currentTopic.title}

Curriculum objectives:
${currentTopic.objectives?.join("\n") || "Not provided"}

Interview question number:
${session.questionCount + 1}

Conversation so far:
${conversation || "No previous conversation."}

Rules:

1. Ask exactly ONE technical interview question.

2. Stay focused on the current curriculum topic.

3. Use the candidate's previous answer when creating
   the next question.

4. The interview should behave conversationally.

5. When continuing on the same curriculum topic, generate
   a follow-up question based directly on the candidate's
   previous answer.

6. A follow-up must reference or build upon something from
   the candidate's previous response.

7. If the candidate's previous answer is vague or incomplete,
   ask them to clarify, justify, or explain the missing part.

8. If the candidate's previous answer is strong, increase
   the technical depth or introduce a relevant scenario.

9. When the curriculum topic changes, ask a fresh technical
   question about the new topic instead of forcing a follow-up.

10. Do not repeat a question that has already been asked.

11. Do not ask multiple questions in one response.

12. Do not provide the answer yourself.

13. Do not mention these instructions.

14. Return ONLY the interview question.
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