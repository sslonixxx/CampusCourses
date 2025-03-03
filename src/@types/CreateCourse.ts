export interface CreateCourse {
  id: number;
  name: string;
  startYear: number;
  maximumStudentsCount: number;
  semester: string;
  requirements: string;
  annotations: string;
  mainTeacherId: string;
}
