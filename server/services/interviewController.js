export function createInterviewSession(
  sessionId,
  candidate,
  topics
) {
  if (topics.length < 4) {
    throw new Error(
      "Candidate does not have enough completed curriculum days for the interview."
    );
  }

  return {
    sessionId,
    candidate,

    topics: topics.slice(0, 4),

    currentTopicIndex: 0,
    questionCount: 0,

    topicsCovered: new Set(),

    messages: [],
    answers: [],

    done: false,
  };
}

export function addAssistantMessage(session, message) {
  session.messages.push({
    role: "assistant",
    content: message,
  });
}


export function addCandidateMessage(session, message) {
  session.messages.push({
    role: "candidate",
    content: message,
  });

  session.answers.push({
    questionNumber: session.questionCount,
    answer: message,
  });
}


export function incrementQuestion(session) {
  session.questionCount += 1;
}


export function moveToNextTopic(session) {
  if (
    session.currentTopicIndex <
    session.topics.length - 1
  ) {
    session.currentTopicIndex += 1;
    return true;
  }

  return false;
}


export function getCurrentTopic(session) {
  return session.topics[
    session.currentTopicIndex
  ];
}


export function canFinishInterview(session) {
  const minimumQuestionsReached =
    session.questionCount >= 8;

  const minimumTopicsReached =
    session.topicsCovered.size >= 4;

  return (
    minimumQuestionsReached &&
    minimumTopicsReached
  );
}