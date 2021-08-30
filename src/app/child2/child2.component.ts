import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Input() name: string;
  @Input() parentName: string;
  @Input() parentCount: number;
  moneydetails = 0;
  @Output() valueChange = new EventEmitter<any>();
  money = 0;
  counter = 10;
  msg2: string = '';
  constructor() {}

  ngOnInit() {
    //this.valueChange.subscribe(v => {
    //  this.moneydetails += v}
    //);
  }

  valueChanged() {
    //this.counter += 1;
    console.log(this.valueChange.emit({ no: 2, count: this.counter }));
  }
}
