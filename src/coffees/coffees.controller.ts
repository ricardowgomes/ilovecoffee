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
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This returns all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This returns one coffee with id #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates one coffee with id #${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action deletes one coffee with id #${id}`;
  }
}
