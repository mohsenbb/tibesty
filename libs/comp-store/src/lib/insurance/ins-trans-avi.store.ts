import { Injectable } from '@angular/core';
import { InsTransAvi } from "@tibesty/data-model";
import { ComponentStore } from "@ngrx/component-store";
import { InsTransAviService } from "@tibesty/data-api";
import { map, take, withLatestFrom } from "rxjs";

export interface InsTransAviState {
  contacts: InsTransAvi[];
  searchStr: string;
}

const defaultState: InsTransAviState = {
  contacts: [],
  searchStr: ''
};

@Injectable({
  providedIn: 'root'
})
export class InsTransAviStore extends ComponentStore<InsTransAviState> {

  readonly contacts$ =
    this.select(({contacts}) => contacts);

  readonly searchStr$ =
    this.select(({searchStr}) => searchStr);

  readonly contactsFiltered$ = this.select(({contacts, searchStr}) =>
    contacts.filter((contact: InsTransAvi) =>
      Object.values(contact).join('').toLowerCase().includes(searchStr)));

  readonly contactsUpdate = this.updater((state, contacts: InsTransAvi[]) => ({
    ...state,
    contacts
  }));

  constructor(private apiService: InsTransAviService) {
    super(defaultState);
  }

  init() {
    this.loadContacts();
  }

  private readonly loadContacts = () =>
    this.apiService.all()
      .pipe(take(1))
      .subscribe((contacts: any) => this.setState((state) => ({
        ...state,
        contacts
      })));

  readonly searchStrUpdate = (searchStr: string) =>
    this.patchState({searchStr});

  // "create" api returns created contact
  // once emits a result, combine with store's state$, add, and patchState
  addContact = (contact: InsTransAvi) => {
    this.apiService.create(contact)
      .pipe(
        withLatestFrom(this.state$),
        map(([apiContact, state]) => ([...state.contacts, apiContact])),
        take(1))
      .subscribe((contacts: InsTransAvi[]) =>
        this.patchState({contacts})
      );
  };

  // "update" api returns updated contact
  // once emitted, combine with contacts$ from selector, locate and update through id,
  //   and patchState
  updateContact = (contact: InsTransAvi) => {
    this.apiService.update(contact)
      .pipe(
        withLatestFrom(this.contacts$),
        map(([apiContact, contacts]) => {
          const idx = contacts.findIndex((contact: any) => contact.id === apiContact.id);
          const contactsClone = [...contacts];
          contactsClone[idx] = apiContact;
          return contactsClone;
        }),
        take(1)
      )
      .subscribe((contacts: InsTransAvi[]) =>
        this.patchState({contacts})
      );
  };

  // "remove" api returns the entire, modified collection
  // once emitted, simply "update" state with new collection
  deleteContact = (contact: InsTransAvi) =>
    this.apiService.delete(contact)
      .pipe(take(1))
      .subscribe((contacts: any) => this.contactsUpdate(contacts));
}
