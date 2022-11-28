import { Pipe, PipeTransform } from '@angular/core';
import { TransKeyService } from "@tibesty/translation";

@Pipe({
  name: 'transKey'
})
export class TransKeyPipe implements PipeTransform {

  constructor(private service: TransKeyService) {
  }

  transform(id: string): string {
    return this.service.getTransKey(id) || '**!key**';
  }
}
