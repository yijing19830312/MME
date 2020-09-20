import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { StockPart } from './stock-part';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stockParts = [
      { 
        ['id']: 11,
        ['PART_NAME']: 'Bolt',
        ['NEW_PNO']: 'newPNO', 
        ['PART_NAME_CD']: 'ZX45', 
        ['SOURCE_CD']: '37A', 
        ['SUPPLIER_CD']: '4', 
        ['NET_WEIGHT']: 15.0, 
        ['DOCUMENT']: '22', 
        ['LNK_TEXT20']: 'Hi Yi Jing', 
        ['LNK_TEXT12']: 'This is in memory data'         
      },
      { 
        ['id']: 12,
        ['PART_NAME']: 'Nut',
        ['NEW_PNO']: 'newPNO', 
        ['PART_NAME_CD']: 'ZX45', 
        ['SOURCE_CD']: '37A', 
        ['SUPPLIER_CD']: '4', 
        ['NET_WEIGHT']: 6.0, 
        ['DOCUMENT']: '22', 
        ['LNK_TEXT20']: 'prm 175', 
        ['LNK_TEXT12']: 'superseded'         
      }
    ];
    return {stockParts};
  }
  
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (2).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(stockParts: StockPart[]): number {
    return stockParts.length > 0 ? Math.max(...stockParts.map(stockPart => stockPart.id)) + 1 : 2;
  }
}