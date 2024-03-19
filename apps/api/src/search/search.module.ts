import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchRepository } from './search.repository';
import { PrismaModule } from '../database/prisma.module';
import { SearchResolver } from './search.resolver';

@Module({
  imports: [PrismaModule],
  providers: [SearchService, SearchRepository, SearchResolver],
})
export class SearchModule {}
