import { JokeDto } from './joke.dto';

const jokes: JokeDto[] = [];

export const addJoke = (joke: JokeDto) => {
  joke.id = jokes.length + 1;
  jokes.push(joke);
  return joke;
};

export const getJokeTypes = (): string[] => {
  return ['knock-knock', 'dad', 'puns'];
};
