import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [PostsModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
