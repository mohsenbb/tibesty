import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { openEditContactDialog } from "../edit-contact/edit-contact.component";
import { filter, Observable, take } from "rxjs";
import { InsTransAviStore } from "@tibesty/comp-store";
import { emptyInsTransAviEntry } from "@tibesty/data-model";

@Component({
  selector: 'tibesty-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchOn = false;
  @ViewChild('searchInput') searchInput!: ElementRef;
  get searchStr$(): Observable<string> {
    return this.store.searchStr$;
  }

  constructor(private cd: ChangeDetectorRef,
              private store: InsTransAviStore,
              private dialog: MatDialog) {
  }

  toggleSearch() {
    this.searchOn = !this.searchOn;
    if (this.searchOn) {
      this.cd.detectChanges();
      this.searchInput.nativeElement.focus();
    }
  }

  addContact() {
    openEditContactDialog(this.dialog, emptyInsTransAviEntry)
      .pipe(
        take(1),
        filter(val => !!val)
      ).subscribe(contact => this.store.addContact(contact));
  }

  setSearchStr(searchStr: string) {
    this.store.searchStrUpdate(searchStr);
  }

  reload() {
    this.store.init();
  }
}
