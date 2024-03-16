import { Module } from '@nestjs/common';
import { ProfilesModule } from './profiles/profiles.module';
import { SearchModule } from './search/search.module';
import { JobModule } from './job/job.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [ProfilesModule, SearchModule, JobModule, AdminModule],
})
export class AppModule {}
