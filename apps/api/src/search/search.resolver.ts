import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Profile } from './models/search.models';
import { SearchService } from './search.service';

@Resolver()
export class SearchResolver {
  constructor(private readonly searchService: SearchService) {}
  @Query(() => [Profile])
  async getAllProfiles(): Promise<Profile[]> {
    return this.searchService.getAllProfiles();
  }

  @Query(() => Profile, { nullable: true })
  async getProfile(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Profile | null> {
    const profile = await this.searchService.getProfileById(id);
    if (!profile) {
      // Handle the scenario where the profile with the provided ID doesn't exist
      throw new Error(`Profile with ID ${id} not found`);
    }
    return profile;
  }

  @Query(() => [Profile], { nullable: true })
  async getProfilesByParams(
    @Args('state', { type: () => String }) state: string,
    @Args('firstName', { type: () => String }) firstName: string,
  ): Promise<Profile[] | null> {
    const profiles = await this.searchService.getProfilesByParams(
      state,
      firstName,
    );
    if (!profiles) {
      throw new Error(`Profiles with state ${state} not found`);
    }
    return profiles;
  }
}
