import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StockRequestService } from '../stock-request.service';
import { StockRequest } from '../stockRequest';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {  
  inquiryForm: any;
  searchResult: any[]=[];

  constructor(private formBuilder: FormBuilder, private stockRequestService: StockRequestService) { 
    this.inquiryForm = this.formBuilder.group({
      partNumber: ['', [Validators.required, Validators.maxLength(17)]],
      quantity: ['', [Validators.required, Validators.maxLength(5), Validators.pattern("^[0-9]*$")]],
      vor: ['Y',]

    });  
  }

  getResponse(): void {
    this.stockRequestService.getResponse().subscribe(response => this.searchResult = response);
   
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
    console.log(this.inquiryForm.value)
    if(this.inquiryForm.valid) {
      this.stockRequestService.http.post('api/response', this.inquiryForm.value)
      .subscribe((response)=>{
        console.log('response', this.searchResult);
      }

      )
    } 
    }

  ngOnInit(): void {
   this.getResponse();
  }


}
