import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffes')
export class CoffesController {
  @Get('foo')
  findall(@Query() pagination): string {
    const { limit, offset } = pagination;
    return `This is from Coffee get route Limit: ${limit} Offset: ${offset} `;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This is params name # ${id}`;
  }

  @Post('Poo')
  create(@Body('body') body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: string) {
    return `This is update #${id} of coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() body: string) {
    return `This is Delete #${id} of coffee`;
  }
}
