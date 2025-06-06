export interface Course {
  id: string;
  institution: string;
  period: string;
  title: string;
  description: string | null;
}
function filterValidCourses(courses: (Course | undefined | null)[]): Course[] {
  return courses.filter((course): course is Course => course !== undefined && course !== null);
}