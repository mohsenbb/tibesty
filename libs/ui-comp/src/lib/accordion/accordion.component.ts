import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccordionNode } from "@tibesty/data-model";

@Component({
  selector: 'tibesty-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() panelData: AccordionNode[] = [];
  @Output() selection = new EventEmitter();

  processSelection(selection: any) {
    this.selection.emit(selection);
  }
}
