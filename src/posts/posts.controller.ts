import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/posts')
export class PostsController {
  @Get()
  getPosts(): string {
    return 'LIST OF POSTS';
  }

  @Post('create-new-post')
  createNewPost(): string {
    return 'SUCCESSFULLY CREATE NEW POST!';
  }
}
