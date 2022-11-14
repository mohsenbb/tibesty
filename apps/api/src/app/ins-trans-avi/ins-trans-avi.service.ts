import { Injectable } from '@nestjs/common';
import { CreateInsTransAviDto } from './dto/create-ins-trans-avi.dto';
import { UpdateInsTransAviDto } from './dto/update-ins-trans-avi.dto';

@Injectable()
export class InsTransAviService {
  create(createInsTransAviDto: CreateInsTransAviDto) {
    return 'This action adds a new insTransAvi';
  }

  findAll() {
    return `This action returns all insTransAvi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insTransAvi`;
  }

  update(id: number, updateInsTransAviDto: UpdateInsTransAviDto) {
    return `This action updates a #${id} insTransAvi`;
  }

  remove(id: number) {
    return `This action removes a #${id} insTransAvi`;
  }
}
