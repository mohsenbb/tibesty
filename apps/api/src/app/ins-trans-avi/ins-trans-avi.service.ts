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
    return this.dbData.find(contact => contact.id === id);
  }

  create(contact: InsTransAvi) {
    const newContact = Object.assign({}, contact, {id: uuidv4()});
    this.dbData = [...this.dbData, newContact];
    return newContact;
  }

  update(id: string, contact: InsTransAvi) {
    const idx = this.dbData.findIndex(contact => contact.id === id);
    this.dbData[idx] = contact;
    return this.dbData[idx];
  }

  remove(id: string) {
    const idx = this.dbData.findIndex(contact => contact.id === id);
    this.dbData.splice(idx, 1);
    return this.dbData;
  }
}
