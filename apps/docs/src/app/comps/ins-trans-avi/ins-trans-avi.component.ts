import { Component } from '@angular/core';
import { filter, take } from "rxjs";
import { openEditAddDialog } from "../dialog-edit-add/dialog-edit-add.component";
import { MatDialog } from "@angular/material/dialog";
import { InsTransAviStore } from "@tibesty/comp-store";
import { InsTransAvi } from "@tibesty/data-model";

@Component({
  selector: 'tibesty-ins-trans-avi',
  templateUrl: './ins-trans-avi.component.html',
  styleUrls: ['./ins-trans-avi.component.scss']
})
export class InsTransAviComponent {
  dataSource = this.store.entriesFiltered$;
  displayedColumns =
    ['num', 'insured', 'attachment', 'dateIssue', 'dateEntry', 'paymentNet', 'paymentTotal', 'currencyType', 'paymentMethod', 'edit', 'delete'];

  constructor(private dialog: MatDialog, private store: InsTransAviStore) {}

  updateEntry(entry:InsTransAvi) {
    openEditAddDialog(this.dialog, entry)
      .pipe(
        take(1),
        filter(val => !!val)
      )
      .subscribe(entry => this.store.updateEntry(entry))
  }

  deleteEntry(entry:InsTransAvi) {
    this.store.deleteEntry(entry);
  }
}
