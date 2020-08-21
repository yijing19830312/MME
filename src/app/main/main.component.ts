import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {  
  inquiryForm: any;

  constructor(private formBuilder: FormBuilder) { 
    this.inquiryForm = this.formBuilder.group({
      partNumber: ['', [Validators.required, Validators.maxLength(17)]],
      quantity: ['', [Validators.required, Validators.maxLength(5), Validators.pattern("^[0-9]*$")]],
      vor: ['Y',],

    });
  

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
    // if(this.inquiryForm.valid) {
    //   this.http.post('', this.inquiryForm.value)
    //   .subscribe((response)=>{
    //     console.log('response', response);
    //   }

    //   )
    // } 
    }

  ngOnInit(): void {

   
  }


}
