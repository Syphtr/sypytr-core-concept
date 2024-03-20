import { useLoaderData, json } from "@remix-run/react";

import { getJobs } from "~/models/job.server";

export const loader = async () => {
  const jobs = await getJobs();

  return json({
    jobs,
  });
};

export default function JobsPageRoute() {
  const { jobs } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Jobs page</h1>

      <pre>{JSON.stringify(jobs, null, 2)}</pre>
    </div>
  );
}
