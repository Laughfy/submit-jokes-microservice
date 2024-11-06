import { Controller, Get, Post, Body } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { JokeDto } from './joke.dto';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post('submit')
  submitJoke(@Body() joke: JokeDto) {
    return this.jokesService.submitJoke(joke);
  }

  @Get('types')
  getJokeTypes() {
    return this.jokesService.getJokeTypes();
  }
}
