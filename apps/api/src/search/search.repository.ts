import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma, Profile } from '@prisma/client';

@Injectable()
export class SearchRepository {
  constructor(private readonly prisma: PrismaService) {}

  // findMany
  async findAllProfiles() {
    return this.prisma.profile.findMany({
      include: {
        Education: true,
        Experience: true,
      },
    });
  }
  // findOneById
  async findProfileById(id: number): Promise<Profile> {
    const result = await this.prisma.profile.findFirst({
      where: { id },
      include: {
        Education: true,
        Experience: true,
      },
    });

    return result;
  }

  async findProfilesByParams(
    state: string,
    firstName: string,
  ): Promise<Profile[]> {
    const profiles = await this.prisma.profile.findMany({
      where: {
        AND: [
          {
            state: {
              contains: state,
              mode: 'insensitive',
            },
          },
          {
            first_name: {
              contains: firstName,
              mode: 'insensitive',
            },
          },
        ],
      },
      include: {
        Education: true,
        Experience: true,
      },
    });

    return profiles;
  }

  // async getProfiles(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.ProfileWhereUniqueInput;
  //   where?: Prisma.ProfileWhereInput;
  //   orderBy?: Prisma.ProfileOrderByWithRelationInput;
  // }): Promise<Profile[]> {
  //   const { skip, take, cursor, where, orderBy } = params;

  //   return this.prisma.profile.findMany({ skip, take, cursor, where, orderBy });
  // }
}
