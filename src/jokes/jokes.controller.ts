import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { JokesService } from './jokes.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { JokeDto } from './joke.dto';

@ApiTags('jokes')
@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @ApiOperation({ summary: 'Submit a new joke' })
  @ApiBody({ description: 'Joke content and type', type: JokeDto })
  @ApiResponse({ status: 201, description: 'Joke successfully submitted.' })
  @Post('submit')
  async submitJoke(
    @Body('type') type: string,
    @Body('content') content: string,
  ) {
    return this.jokesService.submitJoke(type, content);
  }

  @ApiOperation({ summary: 'Get available joke types' })
  @ApiResponse({ status: 200, description: 'List of joke types.' })
  @Get('types')
  async getJokeTypes() {
    return this.jokesService.getJokeTypes();
  }

  @ApiOperation({ summary: 'Retrieve jokes by type' })
  @ApiQuery({
    name: 'type',
    required: true,
    description: 'Type of jokes to retrieve',
  })
  @ApiResponse({
    status: 200,
    description: 'List of jokes for the specified type.',
  })
  async getJokesByType(@Query('type') type: string) {
    return this.jokesService.getJokesByType(type);
  }

  //   @Post('submit')
  //   submitJoke(@Body() joke: JokeDto) {
  //     return this.jokesService.submitJoke(joke);
  //   }

  //   @Get('types')
  //   getJokeTypes() {
  //     return this.jokesService.getJokeTypes();
  //   }
}
