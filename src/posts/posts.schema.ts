import { Prop, Schema } from '@nestjs/mongoose';

export type Breadcrumb = {
  url: string;
  name: string;
};

export type Label = {
  label: string;
  postCount: string;
};

export type Author = {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  address?: string;
  birthDate?: Date | string;
  phone?: string;
  profileImg?: string;
  about?: string;
  gender?: 'Male' | 'Female' | 'Other';
  location: Location | string;
};

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  pageUrl: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  breadcrumbs: Breadcrumb[];

  @Prop()
  thumbnailUrl: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;

  @Prop()
  labels: Label[];

  @Prop({ required: true })
  author: Author;

  @Prop({ required: true })
  contentPath: Blob;
}
