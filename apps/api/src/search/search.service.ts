import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { SearchRepository } from './search.repository';
import { Profile } from '@prisma/client';

@Injectable()
export class SearchService {
  constructor(
    private prisma: PrismaService,
    private repository: SearchRepository,
  ) {}

  async getAllProfiles() {
    return this.repository.findAllProfiles();
  }

  async getProfileById(id: number): Promise<Profile> {
    return this.repository.findProfileById(id);
  }

  async getProfilesByParams(
    state: string,
    firstName: string,
  ): Promise<Profile[]> {
    return this.repository.findProfilesByParams(state, firstName);
  }
}
