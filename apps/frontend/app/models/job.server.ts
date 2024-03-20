import { prisma } from "~/db.server";

export async function getJobs() {
  return await prisma.job.findMany({
    take: 15,
  });
}
