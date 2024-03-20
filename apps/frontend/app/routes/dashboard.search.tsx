import { useLoaderData, json } from "@remix-run/react";

import { getProfiles } from "~/models/profile.server";

export const loader = async () => {
  const profiles = await getProfiles();

  return json({
    profiles,
  });
};

export default function SearchPageRoute() {
  const { profiles } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Search page</h1>
      <pre>{JSON.stringify(profiles, null, 2)}</pre>
    </div>
  );
}
