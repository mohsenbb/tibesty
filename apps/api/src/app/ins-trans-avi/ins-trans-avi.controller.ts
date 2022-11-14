import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InsTransAviService } from './ins-trans-avi.service';
import { CreateInsTransAviDto } from './dto/create-ins-trans-avi.dto';
import { UpdateInsTransAviDto } from './dto/update-ins-trans-avi.dto';

@Controller('ins-trans-avi')
export class InsTransAviController {
  constructor(private readonly insTransAviService: InsTransAviService) {}

  @Post()
  create(@Body() createInsTransAviDto: CreateInsTransAviDto) {
    return this.insTransAviService.create(createInsTransAviDto);
  }

  @Get()
  findAll() {
    return this.insTransAviService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insTransAviService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInsTransAviDto: UpdateInsTransAviDto
  ) {
    return this.insTransAviService.update(+id, updateInsTransAviDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insTransAviService.remove(+id);
  }
}
