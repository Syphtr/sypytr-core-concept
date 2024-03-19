import { join } from 'path';
import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { SearchModule } from './search/search.module';
import { JobModule } from './job/job.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    PrismaModule,
    SearchModule,
    JobModule,
    AdminModule,
  ],
})
export class AppModule {}
