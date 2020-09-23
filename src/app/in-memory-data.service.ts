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
        id: 11,
        AFM0010 : {
          AF10_INTERFACE : {
            AF10_RESPONSE : {
              LNK_MSG_CODE: '000',
              LNK_MSG_DESCR: 'SUCCESS',
              PART_NAME: 'CLIP,FUEL RETURN LINE',
              NEW_PNO: '',
              PART_NAME_CD: '05473',
              SOURCE_CD: 'MMC',
              SUPPLIER_CD: 'MMC',
              NET_WEIGHT: 2,
              DOCUMENT: 'SPL NE NAS',
              LNK_TEXT20: 'AVAILABLE',
              LNK_TEXT12: ''    
            }
          }
        }
      },       
      { 
        id: 12,
        AFM0010 : {
          AF10_INTERFACE : {
            AF10_RESPONSE : {
              LNK_MSG_CODE: '000',
              LNK_MSG_DESCR: 'SUCCESS',
              PART_NAME: 'COIL SPRING',
              NEW_PNO: '',
              PART_NAME_CD: '7821',
              SOURCE_CD: 'MMC',
              SUPPLIER_CD: 'MMC',
              NET_WEIGHT: 400,
              DOCUMENT: 'SPL NE NAS',
              LNK_TEXT20: 'NOT AVAILABLE',
              LNK_TEXT12: ''    
            }
          }
        }
      },
      { 
        id: 13,
        AFM0010 : {
          AF10_INTERFACE : {
            AF10_RESPONSE : {
              LNK_MSG_CODE: '050',
              LNK_MSG_DESCR: 'DB2 call error',
              PART_NAME: '',
              NEW_PNO: '',
              PART_NAME_CD: '',
              SOURCE_CD: '',
              SUPPLIER_CD: '',
              NET_WEIGHT: '',
              DOCUMENT: '',
              LNK_TEXT20: '',
              LNK_TEXT12: ''    
            }
          }
        }        
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