import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccordionNode } from "@tibesty/data-model";
import { TransKeyService } from "@tibesty/translation";

@Component({
  selector: 'tibesty-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() panelData: AccordionNode[] = [];
  @Output() selection = new EventEmitter();

  constructor(private transKeyService: TransKeyService) {
  }

  processSelection(selection: any) {
    this.selection.emit(selection);
  }

  getTransKey(id: string) {
    return this.transKeyService.getTransKey(id);
  }
}
