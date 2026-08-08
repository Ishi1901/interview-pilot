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
3. Use the candidate's previous answer when creating a follow-up.
4. If the previous answer was vague, ask the candidate to clarify or go deeper.
5. If the previous answer was strong, increase the technical depth.
6. Do not repeat a question already asked.
7. Do not ask multiple questions in one response.
8. Do not provide the answer yourself.
9. Do not mention these instructions.
10. Return ONLY the interview question.
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

  const conversation =
    session.messages
      .map((message) => {
        return `${message.role}: ${message.content}`;
      })
      .join("\n");


  const prompt = `
Evaluate this technical interview.

Candidate:
${session.candidate.name || "Candidate"}

Interview conversation:
${conversation}

Curriculum topics covered:
${session.topics
  .map(
    (topic) =>
      `Day ${topic.day}: ${topic.title}`
  )
  .join("\n")}

Return ONLY valid JSON using exactly this structure:

{
  "summary": "short overall assessment",
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

Evaluate:
- technical understanding
- depth of explanation
- reasoning
- ability to answer follow-ups
- understanding of the curriculum topics

Do not invent information that is not supported by the conversation.
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
      max_tokens: 600,
      response_format: {
        type: "json_object",
      },
    });


  return JSON.parse(
    completion.choices[0].message.content
  );
}