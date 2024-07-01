import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ProjectsModule } from './projects/projects.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [PostsModule, ProjectsModule, ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
