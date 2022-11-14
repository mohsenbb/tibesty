import { PartialType } from '@nestjs/mapped-types';
import { CreateInsTransAviDto } from './create-ins-trans-avi.dto';

export class UpdateInsTransAviDto extends PartialType(CreateInsTransAviDto) {}
