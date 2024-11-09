import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Joke extends Document {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  submittedAt: Date;
}

export const JokeSchema = SchemaFactory.createForClass(Joke);
