export function getPassedMissions(candidate) {
  if (!candidate?.missions) {
    return [];
  }

  return candidate.missions.filter(
    (mission) => mission.passed === true
  );
}


export function selectInterviewTopics(candidate, curriculum) {
  const passedMissions = getPassedMissions(candidate);

   const curriculumMap = new Map(
  curriculum.days.map((item) => [item.day, item])
);

  const topics = [];

  for (const mission of passedMissions) {
    const curriculumDay = curriculumMap.get(mission.day);

    if (!curriculumDay) {
      continue;
    }

      topics.push({
      day: curriculumDay.day,
      title: curriculumDay.title,
      objectives: curriculumDay.objectives,
      tools: curriculumDay.tools,
    });
  }

  return topics;
}