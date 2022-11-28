import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { MaterialModule } from '@tibesty/material';
import { TbsTableComponent } from './tbs-table/tbs-table.component';
import { UtilsModule } from "@tibesty/utils";

@NgModule({
  imports: [CommonModule, MaterialModule, UtilsModule],
  declarations: [AccordionComponent, TbsTableComponent],
  exports: [AccordionComponent, TbsTableComponent]
})
export class UiCompModule {}
