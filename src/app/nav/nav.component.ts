import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  styles: [`
    .active {
      background-color: #778899 !important;
      font-weight: bold;
  }
  `],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
