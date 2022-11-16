import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete, Put
} from '@nestjs/common';
import { InsTransAviService } from './ins-trans-avi.service';
import { InsTransAvi } from "@tibesty/data-model";

@Controller('ins-trans-avi')
export class InsTransAviController {
  constructor(private readonly insTransAviService: InsTransAviService) {}

  @Post()
  create(@Body() insTransAvi: InsTransAvi) {
    return this.insTransAviService.create(insTransAvi);
  }

  @Get()
  findAll() {
    return this.insTransAviService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insTransAviService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() insTransAvi: InsTransAvi
  ) {
    return this.insTransAviService.update(id, insTransAvi);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insTransAviService.remove(id);
  }
}
