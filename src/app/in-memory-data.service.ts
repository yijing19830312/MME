import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { StockRequest } from './stockRequest'


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  

  createDb() {
    const response = [
      { partName: 11,
        newPNO: 11,
        partNameCode: 11,
        sourceCode: 11,
        splyCode: 11,
        weight: 11,
        documentNumber: 11,
        text20: 11,
        text12: 11},
      {partName: 12,
        newPNO: 12,
        partNameCode: 12,
        sourceCode: 12,
        splyCode: 12,
        weight: 12,
        documentNumber: 12,
        text20: 12,
        text12: 12}
    ];
    return {response}
  }

  constructor() { }
}
