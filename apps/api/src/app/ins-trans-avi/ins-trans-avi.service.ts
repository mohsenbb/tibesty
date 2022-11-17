import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { INS_TRANS_AVI } from "./db";
import { InsTransAvi } from "@tibesty/data-model";

@Injectable()
export class InsTransAviService {
  dbData = INS_TRANS_AVI;

  findAll() {
    return this.dbData;
  }

  findOne(id: string) {
    return this.dbData.find(entry => entry.id === id);
  }

  create(entry: InsTransAvi) {
    const newEntry = Object.assign({}, entry, {id: uuidv4()});
    this.dbData = [...this.dbData, newEntry];
    return newEntry;
  }

  update(id: string, entry: InsTransAvi) {
    const idx = this.dbData.findIndex(entry => entry.id === id);
    this.dbData[idx] = entry;
    return this.dbData[idx];
  }

  remove(id: string) {
    const idx = this.dbData.findIndex(entry => entry.id === id);
    this.dbData.splice(idx, 1);
    return this.dbData;
  }
}
