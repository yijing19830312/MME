/* In the PoC initially JSON keys were including hypen(s). 
 * To support this a different syntax is required, i.e. ['PART-NAME']: string;
 *
 * To make the interface work for both InMemoryData API and MainFrame API calls
 * the id field (which is mandatory for InMemoryData API) is denoted optional by
 * adding a question mark ?
 */  
export interface StockPart {
  id?: number;
  AFM0010 : {
    AF10_INTERFACE : {
      AF10_RESPONSE : {
        LNK_MSG_CODE: string;
        LNK_MSG_DESCR: string;
        PART_NAME: string;
        NEW_PNO: string;
        PART_NAME_CD: string;
        SOURCE_CD: string;
        SUPPLIER_CD: string;
        NET_WEIGHT: number;
        DOCUMENT: string;
        LNK_TEXT20: string;
        LNK_TEXT12: string;      
      }
    }
  }
}