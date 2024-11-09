import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Joke } from './joke.schema';
// import { JokeDto } from './joke.dto';
// import { addJoke, getJokeTypes } from './jokes.repository';

@Injectable()
export class JokesService {
  //   submitJoke(joke: JokeDto) {
  //     return addJoke(joke);
  //   }

  //   getJokeTypes() {
  //     return getJokeTypes();
  //   }

  constructor(@InjectModel(Joke.name) private jokeModel: Model<Joke>) {}

  // Add a new joke to the database
  async submitJoke(type: string, content: string): Promise<Joke> {
    const newJoke = new this.jokeModel({ type, content });
    return newJoke.save();
  }

  // Retrieve all jokes of a specific type
  async getJokesByType(type: string): Promise<Joke[]> {
    return this.jokeModel.find({ type }).exec();
  }

  // Retrieve all unique joke types
  async getJokeTypes(): Promise<string[]> {
    const types = await this.jokeModel.distinct('type').exec();
    return types;
  }
}
