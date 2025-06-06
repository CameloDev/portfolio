export interface Job {
  id: string;
  company: string;
  period: string;
  type: string;
  position: string;
  description: string;
}
function filterValidJobs(jobs: (Job | undefined | null)[]): Job[] {
  return jobs.filter((job): job is Job => job !== undefined && job !== null);
}
