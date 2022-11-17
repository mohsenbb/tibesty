import { Injectable } from '@angular/core';
import { InsTransAvi } from "@tibesty/data-model";
import { ComponentStore } from "@ngrx/component-store";
import { InsTransAviService } from "@tibesty/data-api";
import { map, take, withLatestFrom } from "rxjs";

export interface InsTransAviState {
  entries: InsTransAvi[];
  searchStr: string;
}

const defaultState: InsTransAviState = {
  entries: [],
  searchStr: ''
};

@Injectable({
  providedIn: 'root'
})
export class InsTransAviStore extends ComponentStore<InsTransAviState> {

  readonly entries$ =
    this.select(({entries}) => entries);

  readonly searchStr$ =
    this.select(({searchStr}) => searchStr);

  readonly entriesFiltered$ = this.select(({entries, searchStr}) =>
    entries.filter((entry: InsTransAvi) =>
      Object.values(entry).join('').toLowerCase().includes(searchStr)));

  readonly entriesUpdate = this.updater((state, entries: InsTransAvi[]) => ({
    ...state,
    entries
  }));

  constructor(private apiService: InsTransAviService) {
    super(defaultState);
  }

  init() {
    this.loadEntries();
  }

  private readonly loadEntries = () =>
    this.apiService.all()
      .pipe(take(1))
      .subscribe((entries: InsTransAvi[]) => this.setState((state) => ({
        ...state,
        entries
      })));

  readonly searchStrUpdate = (searchStr: string) =>
    this.patchState({searchStr});

  // "create" api returns created entry
  // once emits a result, combine with store's state$, add, and patchState
  addEntry = (entry: InsTransAvi) => {
    this.apiService.create(entry)
      .pipe(
        withLatestFrom(this.state$),
        map(([apiEntry, state]) => ([...state.entries, apiEntry])),
        take(1))
      .subscribe((entries: InsTransAvi[]) =>
        this.patchState({entries})
      );
  };

  // "update" api returns updated entry
  // once emitted, combine with ins-trans-avi$ from selector, locate and update through id,
  //   and patchState
  updateEntry = (entry: InsTransAvi) => {
    this.apiService.update(entry)
      .pipe(
        withLatestFrom(this.entries$),
        map(([apiEntry, entries]) => {
          const idx = entries.findIndex((entry: InsTransAvi) => entry.id === apiEntry.id);
          const entriesClone = [...entries];
          entriesClone[idx] = apiEntry;
          return entriesClone;
        }),
        take(1)
      )
      .subscribe((entries: InsTransAvi[]) =>
        this.patchState({entries})
      );
  };

  // "remove" api returns the entire, modified collection
  // once emitted, simply "update" state with new collection
  deleteEntry = (entry: InsTransAvi) =>
    this.apiService.delete(entry)
      .pipe(take(1))
      .subscribe((entries: InsTransAvi[]) => this.entriesUpdate(entries));
}
