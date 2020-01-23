import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor() { }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'India'},
    {value: 'pizza-1', viewValue: 'China'},
    {value: 'tacos-2', viewValue: 'Pakistan'}
  ];


  ngOnInit() { }

}
