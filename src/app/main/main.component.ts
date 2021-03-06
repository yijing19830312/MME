import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { StockPart } from '../stock-part';
import { StockPartService } from '../stock-part.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  inquiryForm: any;
  stockPart: StockPart;
  loading: boolean = false;
  

  constructor(private formBuilder: FormBuilder, private stockPartService: StockPartService) { 

    this.inquiryForm = this.formBuilder.group({
      userId: ['', [Validators.required, Validators.maxLength(8)]],
      distributor: ['', [Validators.required, Validators.maxLength(4)]],
      partNumber: ['', [Validators.required, Validators.maxLength(17)]],
      quantity: ['', [Validators.required, Validators.maxLength(5), Validators.pattern("^[0-9]*$")]],
      vor: ['Y', [Validators.required]]
    });

  }

  get userId() {
    return this.inquiryForm.get('userId');
  }

  get distributor() {
    return this.inquiryForm.get('distributor');
  }

  get partNumber() {
    return this.inquiryForm.get('partNumber');
  }
 
  get quantity() {
    return this.inquiryForm.get('quantity');
  }

  get vor() {
    return this.inquiryForm.get('vor');
  }

  onSubmit() {
    this.stockPart = {} as StockPart;
     this.getStockPart();
    
  }

  getStockPart(): void {
    this.loading = true;
    this.stockPartService.getStockPart(
      this.inquiryForm.userId, 
      this.inquiryForm.distributor, 
      this.inquiryForm.partNumber, 
      this.inquiryForm.quantity, 
      this.inquiryForm.vor)
    .subscribe(stockPart => {
      this.loading = false;
      if (stockPart) {
        this.stockPart = stockPart;
      }
      });
  }
  
  ngOnInit(): void {
  }
  
}
