import { getCommit, repos, yearsOfJob } from "@/lib/githubServices";
import Stats from "./Stats";

export default async function RenderStats() {
  const commit = await getCommit();
  const experienceYears = yearsOfJob();
  const repositories = await repos();

  return (
    <Stats
      commit={commit}
      experience={experienceYears}
      repositories={repositories}
    />
  );
}
