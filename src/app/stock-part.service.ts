import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { StockPart } from './stock-part';

@Injectable({
  providedIn: 'root'
})
export class StockPartService {

  private stockPartsUrl = 'api/stockParts';  // URL to web api
  loading: boolean;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.loading = false;
   }

    /** GET inquiryStockPart from the server */
    getStockPart(userId: string, distributor: string, partnumber: string,
      quantity: number, vor: string): Observable<StockPart> {

      const url = `${this.stockPartsUrl}/?id=${partnumber}`;

      this.constructJSON(userId, distributor,partnumber,quantity,vor);

      return this.http.get<StockPart>(url).
        pipe(
          map(stockParts => stockParts[0]), // returns a {0|1} element array
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} stock part id=${partnumber}`);
          }),
          catchError(this.handleError<StockPart>(`stock part id=${partnumber}`))
        );
    }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead for now

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a StockPartService message */
  private log(message: string) {
    console.log(`StockPartService: ${message}`);
  }

  private constructJSON(
      userId: string, 
      distributor: string, 
      partnumber: string, 
      quantity: number, 
      vor: string) {

      var rootObject = {
        AFM0010 : {
          AF10_INTERFACE : {
           AF10_REQUEST : {
              LNK_USER_ID: `${userId}`,
              LNK_DISTR_CODE: `${distributor}`,
              PART_NUMBER :  `${partnumber}`,
              QTY: `${quantity}`,
              VOR_Y_N: `${vor}`
            }
          }
        }
      };

      console.log(JSON.stringify(rootObject));
      // From fields construct JSON message
      return "";
  }
}
