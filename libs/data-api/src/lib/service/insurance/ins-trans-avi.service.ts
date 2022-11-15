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

  create(contact: InsTransAvi): Observable<InsTransAvi> {
    return this.http.post<InsTransAvi>(URL, contact);
  }

  update(contact: InsTransAvi): Observable<InsTransAvi> {
    return this.http.put<InsTransAvi>(URL + `/${contact.id}`, contact);
  }

  // for a change, we're making "delete" return the entire collection
  delete(contact: InsTransAvi): Observable<InsTransAvi[]> {
    return this.http.delete<InsTransAvi[]>(URL + `/${contact.id}`);
  }
}
