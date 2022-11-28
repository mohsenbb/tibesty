import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransKeyPipe } from './pipes/trans-key.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TransKeyPipe
  ],
  exports: [
    TransKeyPipe
  ]
})
export class UtilsModule {}
