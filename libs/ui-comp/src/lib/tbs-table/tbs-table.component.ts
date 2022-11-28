import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tibesty-tbs-table',
  templateUrl: './tbs-table.component.html',
  styleUrls: ['./tbs-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TbsTableComponent implements OnInit {
  @Input() dataSource: any;
  @Input() displayedColumns: any;
  @Input() displayedColumnsProps: any;

  @Output() emitUpdate = new EventEmitter();
  @Output() emitDelete = new EventEmitter();

  loader = true;

  ngOnInit() {
    setTimeout(() => {
      this.loader = false;
    }, 500);
  }

  updateEntry(element: any) {
    this.emitUpdate.emit(element);
  }

  deleteEntry(element: any) {
    this.emitDelete.emit(element);
  }
}
