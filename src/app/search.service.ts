import { Injectable } from '@angular/core';
import { StockRequest } from './stockRequest';
import { Observable, of, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { searchParam } from '../../src/app/main/main.component';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiRoot: string = 'http://localhost:8080/v1/MME/search';
  results: StockRequest[];

  constructor(private http: HttpClient) {
    this.results = [];
  }s

  search(data: searchParam): Observable<StockRequest[]> {
    let apiURL = `${this.apiRoot}`;
    return this.http.get<StockRequest[]>(apiURL)
        .pipe(map((res: StockRequest[]) => {
          return res;
        }));
  }

}