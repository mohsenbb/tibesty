import { Component } from '@angular/core';
import { filter, take } from "rxjs";
import { openEditContactDialog } from "../edit-contact/edit-contact.component";
import { MatDialog } from "@angular/material/dialog";
import { InsTransAviStore } from "@tibesty/comp-store";
import { InsTransAvi } from "@tibesty/data-model";

// no longer need ngOnInit/onChanges

@Component({
  selector: 'tibesty-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  dataSource = this.store.contactsFiltered$;
  displayedColumns = ['name', 'phone', 'email', 'edit', 'delete'];

  constructor(private dialog: MatDialog, private store: InsTransAviStore) {}

  updateContact(contact:InsTransAvi) {
    openEditContactDialog(this.dialog, contact)
      .pipe(
        take(1),
        filter(val => !!val)
      )
      .subscribe(contact => this.store.updateContact(contact))
  }

  deleteContact(contact:InsTransAvi) {
    this.store.deleteContact(contact);
  }
}
