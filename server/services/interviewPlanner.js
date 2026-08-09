export function getPassedMissions(candidate) {
  if (!candidate?.missions) {
    return [];
  }

  return candidate.missions.filter(
    (mission) => mission.passed === true
  );
}


export function selectInterviewTopics(candidate, curriculum) {
  if (!candidate?.missions || !curriculum?.days) {
    return [];
  }

  const curriculumMap = new Map(
    curriculum.days.map((item) => [item.day, item])
  );

  const topics = [];

  for (const mission of candidate.missions) {
    const curriculumDay = curriculumMap.get(mission.day);

    if (!curriculumDay) {
      continue;
    }

    // Only use topics that the candidate has actually passed
    if (mission.passed !== true) {
      continue;
    }

    topics.push({
      day: curriculumDay.day,
      title: curriculumDay.title,
      objectives: curriculumDay.objectives,
      tools: curriculumDay.tools,

      // Candidate-specific information
      attempts: mission.attempts || 1,
      passed: mission.passed === true,
    });
  }

  return topics;
}