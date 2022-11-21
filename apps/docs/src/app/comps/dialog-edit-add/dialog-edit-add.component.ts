import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { InsTransAvi } from "@tibesty/data-model";

@Component({
  selector: 'tibesty-dialog-edit-add',
  templateUrl: './dialog-edit-add.component.html',
  styleUrls: ['./dialog-edit-add.component.scss']
})
export class DialogEditAddComponent {
  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private entry: InsTransAvi,
              private dialogRef: MatDialogRef<DialogEditAddComponent>) {
  }

  form = this.fb.group({
    id: [this.entry.id],
    numDoc: [this.entry.numDoc, Validators.required],
    insured: [this.entry.insured, Validators.required],
    attachment: [this.entry.attachment, Validators.required],
    dateIssue: [this.entry.dateIssue, Validators.required],
    dateEntry: [this.entry.dateEntry, Validators.required],
    paymentNet: [this.entry.paymentNet, Validators.required],
    paymentTotal: [this.entry.paymentTotal, Validators.required],
    currencyType: [this.entry.currencyType],
    paymentMethod: [this.entry.paymentMethod],
  });

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }
}

export const openEditAddDialog = (dialog: MatDialog, entry: InsTransAvi) => {
  const config = new MatDialogConfig();
  config.disableClose = true;
  config.autoFocus = true;
  config.data = {
    ...entry
  };

  const dialogRef = dialog.open(DialogEditAddComponent, config);
  return dialogRef.afterClosed();
};
