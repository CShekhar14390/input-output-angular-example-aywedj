import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name: string;
  @Input() parentName: string;parentName3: string;
  @Input() parentCount: number;
  moneydetails = 0;
  msg: string = '';
  moneydetails3 = 0;
  msg3: string = '';
  name3='Pankaj';
  @Output() valueChange = new EventEmitter<any>();
  money = 0;
  counter = 15;
  constructor() {}

  ngOnInit() {
    // this.valueChange.subscribe(v => 
    //   {this.moneydetails += v}
    // );  
  }

  valueChanged(evt) {
    //this.counter += 1;
    this.valueChange.emit({no: evt, count: this.counter});
  }
 
}
