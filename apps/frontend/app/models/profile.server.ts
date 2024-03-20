// import type { Profile } from "@prisma/client";

import { prisma } from "~/db.server";

export async function getProfiles() {
  return await prisma.profile.findMany({
    take: 15,
    include: {
      Job: true,
      Education: true,
      Experience: true,
    },
  });
}
