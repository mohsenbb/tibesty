import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { MaterialModule } from "@tibesty/material";

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [AccordionComponent],
  exports: [
    AccordionComponent
  ]
})
export class UiCompModule {}
