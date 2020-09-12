import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../search.service';
import { StockRequest } from '../stockRequest';
import { stringify } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';

export interface searchParam {
  partNumber: string;
  quantity: number;
  vor: boolean;
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {  
  inquiryForm: any;
  results: StockRequest[];

  data: searchParam = {} as searchParam;

  constructor(private formBuilder: FormBuilder, private searchService: SearchService) { 
    this.inquiryForm = this.formBuilder.group({
      partNumber: ['', [Validators.required, Validators.maxLength(17)]],
      quantity: ['', [Validators.required, Validators.maxLength(5), Validators.pattern("^[0-9]*$")]],
      vor: ['',]

    });  
  }

  doSearch() {
    this.searchService.search(this.data).subscribe( (data) => {
      this.results = data;
    })
   
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

  ngOnInit(): void {
    this.doSearch();
  }


}
