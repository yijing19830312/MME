import { Injectable } from '@angular/core';
import { StockRequest } from './stockRequest';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockRequestService {
  private responseUrl = 'api/response';

  constructor(public http: HttpClient) {}

  getResponse(): Observable<StockRequest[]>{
    return this.http.get<StockRequest[]>(this.responseUrl)
  }

  // searchRequest(term: string): Observable<StockRequest[]> {
  //   if (!term.trim()) {
  //     return of ([]);
  //   }

  //   return this.http.get<StockRequest[]>(`${this.responseUrl}/?response.partName=${term}`)
  // }
}
