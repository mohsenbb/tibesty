import { Injectable } from '@angular/core';
import { KeyProperties } from "@tibesty/data-model";
import { TRANS_KEYS } from "../../assets/keys";

@Injectable({
  providedIn: 'root'
})
export class TransKeyService {

  lang = document.body.dir === 'ltr' ? 0 : 1;
  transKeyMap = new Map<string, KeyProperties>();

  constructor() {
    this.loadTransKeys();
  }

  private loadTransKeys() {
    TRANS_KEYS.forEach(entry =>
      this.transKeyMap.set(entry.id, entry));
  }

  getTransKey(id: string) {
    return this.transKeyMap.get(id)?.title[this.lang];
  }
}
