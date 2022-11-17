import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { InsTransAvi } from "@tibesty/data-model";

const URL = 'http://localhost:3333/api/ins-trans-avi';

@Injectable({
  providedIn: 'root'
})
export class InsTransAviService {

  constructor(private http: HttpClient) {
  }

  all(): Observable<InsTransAvi[]> {
    return this.http.get<InsTransAvi[]>(URL);
  }

  create(entry: InsTransAvi): Observable<InsTransAvi> {
    return this.http.post<InsTransAvi>(URL, entry);
  }

  update(entry: InsTransAvi): Observable<InsTransAvi> {
    return this.http.put<InsTransAvi>(URL + `/${entry.id}`, entry);
  }

  // for a change, we're making "delete" return the entire collection
  delete(entry: InsTransAvi): Observable<InsTransAvi[]> {
    return this.http.delete<InsTransAvi[]>(URL + `/${entry.id}`);
  }
}
