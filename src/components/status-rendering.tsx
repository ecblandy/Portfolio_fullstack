import { getCommit, repos, yearsOfJob } from "@/lib/githubServices";
import Stats from "./stats";

export default async function StatsRender() {
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
