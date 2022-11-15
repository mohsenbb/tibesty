import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { InsTransAvi } from "@tibesty/data-model";

@Component({
  selector: 'tibesty-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private contact: InsTransAvi,
              private dialogRef: MatDialogRef<EditContactComponent>) {
  }

  form = this.fb.group({
    id: [this.contact.id],
    name: [this.contact.name, Validators.required],
    phone: [this.contact.phone, Validators.required],
    email: [this.contact.email, Validators.required],
  });

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }
}

export const openEditContactDialog = (dialog: MatDialog, contact: InsTransAvi) => {
  const config = new MatDialogConfig();
  config.disableClose = true;
  config.autoFocus = true;
  config.data = {
    ...contact
  };

  const dialogRef = dialog.open(EditContactComponent, config);
  return dialogRef.afterClosed();
};
