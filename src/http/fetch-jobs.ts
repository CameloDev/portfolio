import type { Job } from "@/@types";
import { FETCH_JOBS_QUERY } from "@/graphql";
import { apolloClient } from "@/lib/apollo";

export async function fetchJobs(): Promise<Job[]> {
  const response = await apolloClient.query({
    query: FETCH_JOBS_QUERY,
  });

const jobs = response.data.job as (Job | null | undefined)[];
return jobs.filter((job): job is Job => job != null);
}