import { Controller, Get, Header, HttpCode, Param, Post } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getPosts(): string {
    return 'LIST OF POSTS';
  }

  @Get(':id')
  @HttpCode(203)
  @Header('Content-Type', 'application/json')
  getPostById(@Param('id') id: string): Record<string, string> {
    return {
      message: 'Succesfully get post with id:' + id,
      content: 'Lorem Ipsum!',
    };
  }

  @Post('create-new-post')
  createNewPost(): string {
    return 'SUCCESSFULLY CREATE NEW POST!';
  }
}
