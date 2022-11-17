import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { MaterialModule } from '@tibesty/material';
import { TbsTableComponent } from './tbs-table/tbs-table.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [AccordionComponent, TbsTableComponent],
  exports: [AccordionComponent, TbsTableComponent]
})
export class UiCompModule {}
