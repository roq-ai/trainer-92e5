const mapping: Record<string, string> = {
  courses: 'course',
  quizzes: 'quiz',
  topics: 'topic',
  trainers: 'trainer',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
