import { Injectable } from '@nestjs/common';
import { JokeDto } from './joke.dto';
import { addJoke, getJokeTypes } from './jokes.repository';

@Injectable()
export class JokesService {
  submitJoke(joke: JokeDto) {
    return addJoke(joke);
  }

  getJokeTypes() {
    return getJokeTypes();
  }
}
