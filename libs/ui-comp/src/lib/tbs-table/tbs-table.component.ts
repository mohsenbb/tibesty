import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { TransKeyService } from "@tibesty/translation";

@Component({
  selector: 'tibesty-tbs-table',
  templateUrl: './tbs-table.component.html',
  styleUrls: ['./tbs-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TbsTableComponent {
  @Input() dataSource:any;
  @Input() displayedColumns:any;
  @Input() displayedColumnsProps:any;

  @Output() emitUpdate = new EventEmitter();
  @Output() emitDelete = new EventEmitter();

  constructor(private transKeyService: TransKeyService) {
  }

  updateEntry(element: any) {
    this.emitUpdate.emit(element)
  }

  deleteEntry(element: any) {
    this.emitDelete.emit(element);
  }

  getTransKey(id: string) {
    return this.transKeyService.getTransKey(id);
  }
}
