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

  constructor(private formBuilder: FormBuilder, private stockPartService: StockPartService) { 

    this.inquiryForm = this.formBuilder.group({
      distributor: ['', [Validators.required, Validators.maxLength(4)]],
      userId: ['', [Validators.required, Validators.maxLength(8)]],
      partNumber: ['', [Validators.required, Validators.maxLength(17)]],
      quantity: ['', [Validators.required, Validators.maxLength(5), Validators.pattern("^[0-9]*$")]],
      vor: ['Y', [Validators.required]]
    });

  }

  get distributor() {
    return this.inquiryForm.get('distributor');
  }

  get userId() {
    return this.inquiryForm.get('userId');
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
 
    this.getStockPart();

  }

  getStockPart(): void {
    
    this.stockPartService.getStockPart(
      this.inquiryForm.userId, 
      this.inquiryForm.distributor, 
      this.inquiryForm.partNumber, 
      this.inquiryForm.quantity, 
      this.inquiryForm.vor)
    .subscribe(stockPart => this.stockPart = stockPart);
  }
  
  ngOnInit(): void {
  }
  
}
